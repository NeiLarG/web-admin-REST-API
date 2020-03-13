const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/user.controller');
const { authorize, ACTIVE_STATUS, LOGGED_USER } = require('../../middlewares/auth');
const {
  listUsers,
  updateUser,
} = require('../../validations/user.validation');

const router = express.Router();

router.param('userId', controller.load);

router
  .route('/')
  .get(
    authorize(LOGGED_USER),
    authorize(ACTIVE_STATUS),
    validate(listUsers),
    controller.list,
  );

router
  .route('/:userId')
  .get(
    authorize(LOGGED_USER),
    authorize(ACTIVE_STATUS),
    controller.get,
  )
  .patch(
    authorize(LOGGED_USER),
    authorize(ACTIVE_STATUS),
    validate(updateUser),
    controller.updateStatus,
  )
  .delete(
    authorize(LOGGED_USER),
    authorize(ACTIVE_STATUS),
    controller.remove,
  );

module.exports = router;
