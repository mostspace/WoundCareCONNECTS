const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.post('/submission', userController.submission);
router.post('/contact', userController.contactUs);

module.exports = router;
