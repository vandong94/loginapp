const {common, card, user} = require(PATH.CONTROL);



const callbackStyle = (req, res, next) => {

    let emailuser = req.cookies.email;

    let balanceUser = 0;

    user.isRegisteredBefore(emailuser, (err, data) => {

        if(err) throw err;

        balanceUser = data.balance;
        let balanceremain = balanceUser - req.body.buy;
        let valuecard = req.body.buy;

        let namecard = "";

        if(valuecard == 10){
            namecard = "Mệnh giá 10.000";
        }else if(valuecard == 20){
            namecard = "Mệnh giá 20.000"
        }else {
            namecard = "Mệnh giá 30.000";
        }

        user.updateBalance(emailuser, balanceremain, (err, success) => {
            if(err) throw err;
        });

        card.createNewHistory({
            emailuser,
            namecard,
            valuecard,
            balanceremain
        },(err, newHistory) => {
            if(err) return next();
            res.redirect('/card/history');
            // res.json({
            //     success: true,
            //     history_id: newHistory._id
            // });
        });
        
    });
    
}
module.exports = [
    common.expressParser.bodyParser,
    callbackStyle
]