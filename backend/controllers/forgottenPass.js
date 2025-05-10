const User = require('../models/User');
const bcrypt = require('bcryptjs');
const sendMail = require('../utils/sendEmail');
const crypto = require('crypto');


// 1. Forgot Password - Send OTP
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  console.log( email );
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ success: false, msg: 'User not found' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  user.otp = otp;
  user.otpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes from now

  await user.save();
  await sendMail(email, 'Your OTP for Password Reset',
  `Your One-Time Password (OTP) is: ${otp}. It is valid for 10 minutes.`);

  res.status(200).json({ success: true, msg: 'OTP sent to your email' });
};

// 2. Verify OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  console.log('Email received from client:', email); // 👈 This will show you what email was sent
  console.log('OTP received from client:', otp); 

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, msg: 'User not found' });
    }

    // Debug logs (optional)
    console.log('Received OTP:', otp);
    console.log('Stored OTP:', user.otp);
    console.log('OTP Expiry:', new Date(user.otpExpiry));
    console.log('Now:', new Date());

    // Check OTP and expiry
    if (user.otp !== otp || user.otpExpiry < Date.now()) {
      return res.status(400).json({ success: false, msg: 'OTP is incorrect or expired' });
    }

    // Clear OTP after successful verification
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    return res.status(200).json({ success: true, msg: 'OTP verified successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, msg: 'Server error' });
  }
};


// 3. Reset Password
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ success: false, msg: 'User not found' });

  const hashed = await bcrypt.hash(newPassword, 10);
  user.password = hashed;
  user.otp = undefined;
  user.otpExpiry = undefined;

  await user.save();

  res.status(200).json({ success: true, msg: 'Password updated successfully' });
};
