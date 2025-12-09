const Project = require('../models/Project');
const slugify = (s) => s.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');

exports.getAll = async (req, res) => {
  try {
    const list = await Project.find().sort({ createdAt: -1 });
    return res.json(list);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.getOne = async (req, res) => {
  try {
    const p = await Project.findById(req.params.id);

    if (!p) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.json(p);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.create = async (req, res) => {
  const { title, description, link, images } = req.body;
  const slug = slugify(title);
  const project = new Project({ title, slug, description, link, images });
  await project.save();
  res.json(project);
};

exports.update = async (req, res) => {
  const { title, description, link, images } = req.body;
  const updated = await Project.findByIdAndUpdate(req.params.id, { title, description, link, images, updatedAt: Date.now() }, { new: true });
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project has successfully deleted' });
};