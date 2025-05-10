const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto'); // ✅ CommonJS syntax


const router = express.Router();

// Signup: send OTP
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password); // Log to ensure data is being received
  
  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }

  try {
    // Check for existing user
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Generate OTP and hash the password
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedPassword = await bcrypt.hash(password, 10);

    // Send OTP to email
    await sendEmail(email, "Verify your email", `Your OTP is ${otp}`);

    // Save new user
    await User.create({
      email,
      password: hashedPassword,
      otp,
     otpExpires: new Date(Date.now() + 10 * 60 * 1000)
    });

    res.json({ msg: "OTP sent to your email!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

router.post('/verify', async (req, res) => {
    const { email, otp } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ msg: "User not found" });
      }
  
      // 🧪 Debugging OTP issues
      console.log("Stored OTP:", user.otp);
      console.log("Entered OTP:", otp);
      console.log("Current Time:", Date.now());
      console.log("OTP Expiry Time:", user.otpExpires);
  
      // Check if OTP is valid or expired
      if (user.otp !== otp || user.otpExpires < Date.now()) {
        return res.status(400).json({ msg: "Invalid or expired OTP" });
      }
  
      // Clear OTP after successful verification
      user.otp = null;
      user.otpExpires = null;
      await user.save();
  
      res.json({ msg: "Signup successful" });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Server error" });
    }
  });
  

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Wrong password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ msg: "Login successful", token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});


  






module.exports = router;
