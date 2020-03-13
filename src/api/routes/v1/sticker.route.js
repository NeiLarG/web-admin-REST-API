const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/sticker.controller');
const { authorize, ACTIVE_STATUS, LOGGED_USER } = require('../../middlewares/auth');
const {
  createUpdateSticker,
} = require('../../validations/sticker.validation');

const router = express.Router();

router
  .route('/')
  .get(
    authorize(LOGGED_USER),
    authorize(ACTIVE_STATUS),
    controller.list,
  )
  .post(
    authorize(LOGGED_USER),
    authorize(ACTIVE_STATUS),
    validate(createUpdateSticker),
    controller.create,
  )
  .delete(
    authorize(LOGGED_USER),
    authorize(ACTIVE_STATUS),
    controller.removeAll,
  );

router
  .route('/:stickerId')
  .put(
    authorize(LOGGED_USER),
    authorize(ACTIVE_STATUS),
    validate(createUpdateSticker),
    controller.update,
  )
  .delete(
    authorize(LOGGED_USER),
    authorize(ACTIVE_STATUS),
    controller.remove,
  );

module.exports = router;
