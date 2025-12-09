function validateStrongPassword(pw) {
  // minimal 12 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{12,}$/;
  return re.test(pw);
}

module.exports = { validateStrongPassword };