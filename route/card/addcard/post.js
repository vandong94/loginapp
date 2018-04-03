const {common, card, user} = require(PATH.CONTROL);

const callbackStyle = (req, res, next) => {

    let numbercard = req.body.cardNumber;

    let email = req.cookies.email;

    card.findByNumberCard(numbercard, (err, foundCard) => {
        
        if(err) return next(err);

        if(foundCard == null || foundCard.statuscard == 1){
            var string = encodeURIComponent('Incorrect number card or it used. Please try again!');
            res.redirect('/card/addcard?message=' + string);
        }else{
            user.isRegisteredBefore(email, (err, foundUser) => {
                if(err) throw err;
                if(foundUser != null){
                    let valueUpdateBalance = foundUser.balance + foundCard.valuecard;
                    user.updateBalance(email, valueUpdateBalance, (err, success) => {
                        if(err) throw err;
                        card.updateStatusAndDateUse(numbercard, 1, Date.now(),(err, succes) =>  {
                            if(err) throw err;
                            res.redirect('/card/buy');
                        });
                    })
                }
            });
        }
    });

}

module.exports = [
    common.expressParser.bodyParser,
    callbackStyle
]