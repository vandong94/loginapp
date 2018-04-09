const {common, card, card_type} = require(PATH.CONTROL);

const callbackStyle = (req, res, next) => {
    let code = req.body.cardNumber;
    card.findCardByCode(code, (err, foundCard) => {
        if(err) return next(err);
        if(foundCard == null || foundCard.status == 1){
            var string = 'Incorrect number card or it used. Please try again!';
            res.render('add_card', {
                message: string
            });
        }else{
            let _id = foundCard.type_id;
            card_type.getCardByID(_id, (err, getValueCard) => {
                if(err) return next(err);
                req.user.balance += getValueCard.value;
                req.user.save(err => {
                    if(err) return next(err);
                    let status = 1;
                    let used_at = Date.now();
                    card.updateCardByCode(code, status, used_at, (err, succes) =>  {
                        if(err) return next(err);
                        res.redirect('/card/buy');
                    });
                });

            });
        }
    });

}

module.exports = [
    common.expressParser.bodyParser,
    callbackStyle
]