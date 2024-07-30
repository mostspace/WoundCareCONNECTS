const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const agencyRoutes = require('./agencyRoutes');

// Test route
router.get('/test', (req, res) => {
    res.send("Test: Success");
});

// Mount routes
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/agency', agencyRoutes);

module.exports = router;
