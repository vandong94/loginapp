const get = require('./get');

module.exports = (route) => {
    route.get('/history', get);
}
