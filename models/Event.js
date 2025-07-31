const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  location: String,
});

module.exports = mongoose.model('Event', EventSchema);
