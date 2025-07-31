const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const eventRoutes = require('./routes/EventRoute');
const registrationRoutes = require('./routes/RegistrationRoute');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB using MONGODB_URI from .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Mongo Error:', err));

// Routes — mount at root, since you already use /api inside EventRoute.js
app.use('/', eventRoutes);
app.use('/', registrationRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
