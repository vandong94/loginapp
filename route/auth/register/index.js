const get = require('./get');
const post = require('./post');

module.exports = router => {
    router.get('/register', get);
    router.post.apply(router, ['/register', ...post]);
}