// models/Ebook.js
const mongoose = require("mongoose");

const ebookSchema = new mongoose.Schema({
  title: String,
  author: String,
  coverImageUrl: String,
  pdfUrl: String,
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ebook", ebookSchema);
