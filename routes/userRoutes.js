const express = require('express');
const { getMe } = require('../controllers/userController');

const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

router.get('/me', protect, getMe);

module.exports = router;