const router = require('express').Router();

const register = require('./register');

const login = require('./login');

const logout = require('./logout');

login(router);

register(router);

logout(router);

module.exports = router;