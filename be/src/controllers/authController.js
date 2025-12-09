const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validateStrongPassword } = require('../validation/passwordValidator');
const nodemailer = require('nodemailer');

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';
const RESET_TOKEN_EXPIRES_MIN = parseInt(process.env.RESET_TOKEN_EXPIRES_MIN || '30', 10);

// simple transporter, configure env for real use
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587', 10),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.register = async (req, res) => {
  const { username, password, email } = req.body;
  if (!validateStrongPassword(password)) {
    return res.status(400).json({ message: 'Password is not strong enough!' });
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  try {
    const user = new User({ username, passwordHash: hash, email });
    await user.save();
    res.json({ message: 'User has successfully created' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ message: 'Invalid username or password' });
  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.status(401).json({ message: 'Invalid username or password' });

  const token = jwt.sign({ id: user._id.toString(), username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  res.json({ token, user: { username: user.username, email: user.email } });
};

exports.requestReset = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(200).json({ message: 'Reset link will sent if email has registered' });

  const token = user.createResetToken(RESET_TOKEN_EXPIRES_MIN);
  await user.save();

  const resetLink = `${process.env.FRONTEND_URL}/admin/reset-password?token=${token}&email=${encodeURIComponent(user.email)}`;

  // Send email (in production ensure secure transporter and proper templates)
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Reset password',
      text: `Click this link to reset your password (valid until ${RESET_TOKEN_EXPIRES_MIN} minutes): ${resetLink}`
    });
  } catch (err) {
    console.error('Mail send error', err);
  }

  res.json({ message: 'Reset link will sent if email has registered' });
};

exports.resetPassword = async (req, res) => {
  const { email, token, newPassword } = req.body;
  const user = await User.findOne({ email, resetPasswordToken: token });
  if (!user) return res.status(400).json({ message: 'Token invalid' });
  if (Date.now() > user.resetPasswordExpires) return res.status(400).json({ message: 'Token expired' });

  if (!validateStrongPassword(newPassword)) {
    return res.status(400).json({ message: 'Password is not strong enough!' });
  }
  const salt = await bcrypt.genSalt(10);
  user.passwordHash = await bcrypt.hash(newPassword, salt);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  res.json({ message: 'Password has been successfully reset' });
};