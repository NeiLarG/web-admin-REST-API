const mongoose = require('mongoose');
const stickerSchema = require('../schemas/sticker.schema');

module.exports = mongoose.model('Sticker', stickerSchema);
