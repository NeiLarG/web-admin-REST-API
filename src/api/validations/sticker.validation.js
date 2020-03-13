const Joi = require('joi');
const Sticker = require('../models/sticker.model');

module.exports = {
  createUpdateSticker: {
    body: {
      text: Joi.string().required(),
      color: Joi.string().valid(Sticker.colors),
    },
  },
};
