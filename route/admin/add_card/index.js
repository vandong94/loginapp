const get = require('./get');

const post = require('./post');

module.exports = (router) => {
    router.get('/add_card', get);
    router.post('/add_card', post);
}
