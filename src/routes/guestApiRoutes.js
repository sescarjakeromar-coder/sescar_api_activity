const express = require('express');
const router = express.Router();

const {
  getAllGuests,
  createGuest,
  getGuestById,
  updateGuest,
  deleteGuest,
} = require('../controllers/guestController');

router.get('/guests', getAllGuests);
router.post('/guests', createGuest);
router.get('/guests/:id', getGuestById);
router.put('/guests/:id', updateGuest);
router.delete('/guests/:id', deleteGuest);

module.exports = router;
