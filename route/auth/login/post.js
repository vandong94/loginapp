const {common, user} = require(PATH.CONTROL);

const jwt = require('jsonwebtoken');

/**
 *
 * @param req
 * @param res
 * @param next
 */
const callbackStyle = (req, res, next) => {

    let {email, password} = req.body;

    user.checkLogin(email, password, (err, foundUser) => {
        if (err) return next(err);
        if (foundUser != null) {
            const token = jwt.sign({foundUser}, 'secretkey', {expiresIn: '30s'});
            res.cookie("email", foundUser.email, {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: false,
            });
            // res.json({
            //     token: token
            // })
            res.redirect("/card/buy");
        }
        else {
            res.redirect('/auth/login');
        }
    })
}
module.exports = [
    common.expressParser.bodyParser,
    callbackStyle
]