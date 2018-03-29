const get = require('./get');

const post = require('./post');

module.exports = (router) => {
    router.get('/buy', get);
    router.post.apply(router, ['/buy', ...post]);
}
