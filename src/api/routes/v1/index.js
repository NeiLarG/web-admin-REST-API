const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const stickerRoutes = require('./sticker.route');

const router = express.Router();

router.use('/users', userRoutes);

router.use('/auth', authRoutes);

router.use('/stickers', stickerRoutes);

module.exports = router;
