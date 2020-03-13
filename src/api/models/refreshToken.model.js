const mongoose = require('mongoose');
const refreshTokenSchema = require('../schemas/refreshToken.schema');

module.exports = mongoose.model('RefreshToken', refreshTokenSchema);
