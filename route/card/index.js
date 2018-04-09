const router = require('express').Router();

const history = require('./history');

const buy = require('./buy');

const add_balance = require('./add_balance');


history(router);

buy(router);

add_balance(router);


module.exports = router;