const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  userId: String,
  material: String,
  quantity: Number,
  address: String,
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Pickup', pickupSchema);
