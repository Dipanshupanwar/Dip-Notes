const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Admin = require('./models/AdminModel'); // update the path if needed
const bcrypt = require('bcryptjs');

const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes'); // ✅ fixed: changed from `import` to `require`
const uploadRoutes = require('./routes/upload');
const forgottenRoutes = require('./routes/forgottenRoutes')
const adminAuth = require('./routes/adminAuth');
const adminRoutes = require('./routes/adminRoutes');
const app = express();
const ebook = require('./routes/ebooks');
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() =>{ console.log("MongoDB connected")
    createDefaultAdmin();})
  .catch(err => console.log("Mongo error", err));

 

async function createDefaultAdmin() {
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'admin123';

  const existingAdmin = await Admin.findOne({ email: adminEmail });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    const admin = new Admin({ email: adminEmail, password: hashedPassword });
    await admin.save();
    console.log('✅ Admin created');
  } else {
    console.log('ℹ️ Admin already exists');
  }
}



app.use('/api/auth', authRoutes);
app.use('/api/authadmin', adminAuth);
app.use('/api/reviews', reviewRoutes);
app.use('/api/feedback', feedbackRoutes); // ✅ feedback route added properly

app.use('/api/admin', adminRoutes);
app.use('/api/ebooks', ebook);
app.use('/api', uploadRoutes);

app.use('/api/auth', forgottenRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
