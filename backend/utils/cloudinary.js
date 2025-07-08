const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "ebooks";
    let resource_type = "image"; // 



    if (file.mimetype === "application/pdf") {
      resource_type = "raw";
    }

    return {
      folder,
      resource_type,
    
   
      public_id: Date.now() + "-" + file.originalname,
    };
  },
});

module.exports = { cloudinary, storage };
