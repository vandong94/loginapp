const router = require('express').Router();
const auth = require('./auth');
const errorHandle = require('./error-handle');
const card = require('./card');
const home = require('./get');

router.use('/auth', auth);

router.use('/card', card);

router.use('/', home);

router.use(errorHandle);
module.exports = router;