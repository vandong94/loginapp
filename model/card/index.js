const mongoose = require('mongoose');

const cardSchema = require('./schema');

module.exports = mongoose.model('card', cardSchema);