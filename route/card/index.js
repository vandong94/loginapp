const router = require('express').Router();

const history = require('./history');

const buy = require('./buy');

history(router);

buy(router);

module.exports = router;