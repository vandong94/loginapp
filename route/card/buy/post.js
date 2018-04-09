const {common, card, card_type} = require(PATH.CONTROL);

const callbackStyle = (req, res, next) => {
    let currentBalance = req.user.balance;
    let type_id = req.body.selectCardType;
    card_type.getCardByID(type_id, (err, valueCard) => {
        if(currentBalance < 0 || currentBalance < valueCard.value){
            var string = encodeURIComponent('Your balance is not enough to buy continue. Please add more.!');
            res.redirect('/card/buy?message=' + string);
        }
        else{
            let code = card_type.generateCardCode();
            let user_id = req.user._id;
            card.createNewHistory({user_id, type_id, code}, (err, newHistory) => {
                if(err) return next(err);
                let value = valueCard.value;
                req.user.balance = currentBalance - value;
                req.user.save( (err) => {
                    if(err) return next(err);
                    res.redirect('/card/history');
                });
            });
        }
    });
}

module.exports = [
    common.expressParser.bodyParser,
    callbackStyle
]