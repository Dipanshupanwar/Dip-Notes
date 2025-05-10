const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const authController = require('../controllers/forgottenPass');

router.post('/forgot-password', authController.forgotPassword);
router.post('/verify-otp', authController.verifyOtp);
router.post('/reset-password', authController.resetPassword);

module.exports = router;
