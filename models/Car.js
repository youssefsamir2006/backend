const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, 'Please add a make'],
    trim: true,
  },
  model: {
    type: String,
    required: [true, 'Please add a model'],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, 'Please add a year'],
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description can not be more than 500 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Car', CarSchema);