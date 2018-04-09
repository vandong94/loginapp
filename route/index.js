const router = require('express').Router();
const auth = require('./auth');
const errorHandle = require('./error-handle');
const card = require('./card');
const home = require('./get');
const admin = require('./admin');

const {isAuthenticated, isAdmin} = require('./common');

router.use('/auth', auth);

router.use('/card', isAuthenticated, card);

router.use('/admin',isAdmin, admin);

router.use('/', home);

router.use(errorHandle);

module.exports = router;