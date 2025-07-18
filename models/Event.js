const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: String,
}, { timestamps: true });


module.exports = mongoose.model('Event', eventSchema);