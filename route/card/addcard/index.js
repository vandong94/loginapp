const get = require('./get');

const post = require('./post');

module.exports = (router) => {
    router.get('/addcard', get);
    router.post.apply(router, ['/addcard', ...post]);
}
