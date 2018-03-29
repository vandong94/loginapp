const {Schema} = require('mongoose');

module.exports = Schema({
    name: String,
    email: String,
    password: String,
    balance: {
        type: Number,
        default: 100
    }
});