const mongoose = require('mongoose');

const colors = ['BLUE', 'GREEN', 'PINK'];

const stickerSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  color: {
    type: String,
    enum: colors,
    default: 'BLUE',
  },
});

stickerSchema.statics = {
  colors,
};

module.exports = stickerSchema;
