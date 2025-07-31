const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  },
  name: String,
  email: String,
});

module.exports = mongoose.model('Registration', RegistrationSchema);
