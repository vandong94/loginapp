const get = require('./get');
const post = require('./post');

module.exports = router => {
    router.get('/login', get);
    router.post.apply(router, ['/login', ...post]);
}