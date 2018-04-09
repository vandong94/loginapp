const mongoose = require('mongoose');

const cardTypeSchema = require('./schema');

module.exports = mongoose.model('card_type', cardTypeSchema);