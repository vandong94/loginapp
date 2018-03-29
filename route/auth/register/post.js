const {common, user} = require(PATH.CONTROL);

const callbackStyle = (req, res, next) => {
    let {name, email, password} = req.body;
    // Todo: validate: name, email, password
    user.isRegisteredBefore(email, (err, foundUser) => {
        if (err) return next(err);
        if (foundUser == null) {
            user.registerNewAccount({
                email, name, password
            }, (err, newUser) => {
                if (err) return next(err);
                // success
                res.json({
                    success: true,
                    user_id: newUser._id
                });
            })
        }
        else {
            // failed, email registered before
            res.json({
                success: false,
                message: 'Email registered before'
            });
        }
    })
}
module.exports = [
    common.expressParser.bodyParser,
    callbackStyle
]