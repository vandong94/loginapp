const {user} = require(PATH.CONTROL)

const isAuthenticated = (req, res, next) => {
    let emailUser = req.cookies.email;
    user.isRegisteredBefore(emailUser, (err, getUser) => {
        if (err) return next(err);
        if (getUser == null) {
            res.redirect('/auth/login');
        }
        else {
            req.user = getUser;
            next();
        }
    });
};

const isAdmin = (req, res, next) => {
    let emailUser = req.cookies.email;
    user.isRegisteredBefore(emailUser, (err, getUser) => {
        if (err) return next(err);
        if (getUser != null && getUser.admin == 1) {
            req.user = getUser;
            next();
        }
        else {
            res.redirect('/card/buy');
        }
    });
}

module.exports = {
    isAuthenticated,
    isAdmin
}