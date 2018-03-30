const {user} = require(PATH.CONTROL);

module.exports = (req, res) => {
    let emailUser = req.cookies.email;
    if(emailUser != null){
        user.isRegisteredBefore(emailUser, (err, data) => {
            if(err) throw err;
            let balance = data.balance;
            res.render("buy", {balance: balance});
        })
    }else{
        res.cookie("email", "", {
            maxAge: 0
        });
    }
    
}