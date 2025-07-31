const mongoose = require('mongoose');

<<<<<<< HEAD
const EventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  location: String,
});

module.exports = mongoose.model('Event', EventSchema);
=======

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: String,
}, { timestamps: true });


module.exports = mongoose.model('Event', eventSchema);
>>>>>>> f84c02b2a5467963b47c160b5dee3f873701f94a
