// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Rating = require('../models/Review');
const Feedback = require('../models/FeedbackModel');
const Note = require('../models/UploadModel');

// GET all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET all ratings
router.get('/ratings', async (req, res) => {
  const ratings = await Rating.find();
  res.json(ratings);
});

// GET all feedbacks
router.get('/feedbacks', async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

// GET all notes
router.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

module.exports = router;
