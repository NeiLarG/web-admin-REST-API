const httpStatus = require('http-status');
const Sticker = require('../models/sticker.model');
const User = require('../models/user.model');

exports.list = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user.stickerList);
  } catch (error) {
    return next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const sticker = new Sticker(req.body);
    sticker.text = req.body.text;
    sticker.color = req.body.color;
    const user = await User.findById(req.user._id);
    user.stickerList.push(sticker);
    const savedUser = await user.save();
    res.status(httpStatus.CREATED);
    res.json(savedUser.transform());
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    await User.update(
      {
        _id: req.user._id,
        'stickerList._id': req.params.stickerId,
      },
      {
        $set: {
          'stickerList.$.text': req.body.text,
          'stickerList.$.color': req.body.color,
        },
      },
    );
    const updatedUser = await User.findById(req.user._id);
    res.json(updatedUser.transform());
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    user.stickerList.pull({ _id: req.params.stickerId });
    const savedUser = await user.save();
    res.json(savedUser.transform());
  } catch (error) {
    next(error);
  }
};

exports.removeAll = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    user.stickerList = [];
    const savedUser = await user.save();
    res.json(savedUser.transform());
  } catch (error) {
    next(error);
  }
};
