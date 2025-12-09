const Article = require('../models/Article');
const slugify = (s) => s.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');

exports.getAll = async (req, res) => {
  try {
    const list = await Article.find().sort({ createdAt: -1 });
    return res.json(list);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.getOne = async (req, res) => {
  try {
    const a = await Article.findById(req.params.id);

    if (!a) {
      return res.status(404).json({ message: "Article not found" });
    }

    return res.json(a);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.create = async (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(title);
  const article = new Article({ title, content, author, slug });
  await article.save();
  res.json(article);
};

exports.update = async (req, res) => {
  const { title, content, author } = req.body;
  const updated = await Article.findByIdAndUpdate(req.params.id, { title, content, author, updatedAt: Date.now() }, { new: true });
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ message: 'Article has successfully deleted' });
};