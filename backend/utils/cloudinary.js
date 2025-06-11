const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const isPdf = file.mimetype === "application/pdf";
    return {
      folder: isPdf ? "ebooks" : "covers",
      resource_type: isPdf ? "raw" : "image", // ✅ force raw for pdf
      public_id: file.originalname.split(".")[0],
    };
  },
});

module.exports = { cloudinary, storage };
