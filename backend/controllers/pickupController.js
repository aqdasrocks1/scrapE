const Pickup = require('../models/Pickup');
const { sendSMS, sendEmail } = require('../utils/notifications');

exports.createPickup = async (req, res) => {
  try {
    const pickup = await Pickup.create(req.body);
    await sendSMS('New pickup request received');
    await sendEmail('New Pickup Request', 'A new pickup request has been made.');
    res.status(201).json(pickup);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPickups = async (req, res) => {
  const pickups = await Pickup.find();
  res.json(pickups);
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const pickup = await Pickup.findByIdAndUpdate(id, { status }, { new: true });
  await sendSMS(`Pickup status updated to ${status}`);
  await sendEmail('Pickup Status Updated', `Your pickup status is now: ${status}`);
  res.json(pickup);
};
