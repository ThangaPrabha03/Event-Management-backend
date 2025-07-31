const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Create new RSVP registration
router.post('/', async (req, res) => {
  try {
    const { name, email, eventId } = req.body;

    // Check if already registered
    const existing = await Registration.findOne({ email, eventId });
    if (existing) {
      return res.status(409).json({ message: 'You have already RSVP’d for this event.' });
    }

    // ✅ MISSING LINE FIXED:
    const newRegistration = new Registration({ name, email, eventId });

    await newRegistration.save();
    res.status(201).json(newRegistration);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Optional: Get all registrations
router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find().populate('eventId');
    res.status(200).json(registrations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
