const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const BookingsController = require('../controllers/bookings');

// Handle incoming GET requests to /bookings
router.get("/", checkAuth, BookingsController.get_all);

router.post("/", checkAuth, BookingsController.confirm_booking);

router.get("/:bookingId", checkAuth, BookingsController.get_booking);

router.delete("/:bookingId", checkAuth, BookingsController.delete_booking);

module.exports = router;