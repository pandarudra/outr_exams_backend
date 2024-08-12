const Paper = require("../Models/papers.model");
const post = async (req, res) => {
  const { examName, subject, year, pdfUrl } = req.body;
  const newPaper = new Paper({ examName, subject, year, pdfUrl });
  try {
    await newPaper.save();
    res.status(201).json(newPaper);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const get = async (req, res) => {
  const { year } = req.body;
  try {
    const papers = await Paper.find({ year });
    return res.status(200).json(papers);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
const getpaper = async (req, res) => {
  try {
    const papers = await Paper.find();
    return res.status(200).json(papers);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
module.exports = { post, get, getpaper };
