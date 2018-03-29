const router = require('express').Router();

const register = require('./register');

const login = require('./login');

login(router);

register(router);

module.exports = router;