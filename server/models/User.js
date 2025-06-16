// server/models/User.js

const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  timestamps: true  // adds createdAt and updatedAt
});

// Export model
module.exports = mongoose.model('User', userSchema);
