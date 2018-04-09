const router = require('express').Router();

const add_card = require('./add_card');

add_card(router);

module.exports = router;