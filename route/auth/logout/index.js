const get = require('./get');

module.exports = router => {
    router.get('/login', get);
}