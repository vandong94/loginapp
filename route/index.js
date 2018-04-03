const router = require('express').Router();
const auth = require('./auth');
const errorHandle = require('./error-handle');
const card = require('./card');
const home = require('./get');

router.use('/auth', auth);

var isAuthenticated = (req, res, next) => {
    let emailUser = req.cookies.email;
    if(emailUser != null){
        next();
        return;
    }else{
        res.redirect('/auth/login');
    }
}

router.use('/card', isAuthenticated, card);

router.use('/', home);

router.use(errorHandle);
module.exports = router;