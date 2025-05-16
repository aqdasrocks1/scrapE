const express = require('express');
const router = express.Router();
const { createPickup, getPickups, updateStatus } = require('../controllers/pickupController');

router.post('/', createPickup);
router.get('/', getPickups);
router.patch('/:id/status', updateStatus);

module.exports = router;
