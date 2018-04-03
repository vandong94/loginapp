const router = require('express').Router();

const history = require('./history');

const buy = require('./buy');

const addcard = require('./addcard');

history(router);

buy(router);

addcard(router);

module.exports = router;