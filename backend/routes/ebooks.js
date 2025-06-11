// routes/ebooks.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../utils/cloudinary");
const upload = multer({ storage });

const Ebook = require("../models/Ebook");

// Upload e-book (admin)
// controllers/uploadEbook.js
const cloudinary = require('cloudinary').v2;

router.post("/upload", upload.fields([{ name: "cover" }, { name: "pdf" }]), async (req, res) => {
  try {
    const { title, author } = req.body;
    const coverPath = req.files.cover[0].path;
    const pdfPath = req.files.pdf[0].path;

    // Upload cover (image)
    const coverUpload = await cloudinary.uploader.upload(coverPath, {
      folder: "ebooks",
    });

    // Upload PDF as RAW (not image!)
    const pdfUpload = await cloudinary.uploader.upload(pdfPath, {
      resource_type: "raw",
      folder: "ebooks",
    });

    const ebook = new Ebook({
      title,
      author,
      coverImageUrl: coverUpload.secure_url,
      pdfUrl: pdfUpload.secure_url,
    });

    await ebook.save();

    res.status(201).json({ message: "Ebook uploaded successfully!" });
  } catch (error) {
    console.error("Upload failed:", error);
    res.status(500).json({ error: "Failed to upload ebook." });
  }
});

// DELETE /api/ebooks/:id
router.delete("/:id", async (req, res) => {
  try {
    await Ebook.findByIdAndDelete(req.params.id);
    res.json({ message: "Ebook deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete ebook" });
  }
});


// Get all ebooks
router.get("/all", async (req, res) => {
  try {
    const ebooks = await Ebook.find().sort({ uploadedAt: -1 });
    res.json(ebooks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch ebooks" });
  }
});


module.exports = router;
