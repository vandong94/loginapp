const {common, card_type} = require(PATH.CONTROL);

const callbackStyle = (req, res, next) => {
    let value = req.body.cardType;
    card_type.isExistedBefore(value, (err, foundValue) => {
        if(err) return next(err);
        if(foundValue == null){
            let name = "Mệnh giá " + value;
            card_type.insertCardType({name, value}, (err, success) => {
                if(err) return next(err);
                res.redirect('/card/buy');
            });
        }else{
            var string = encodeURIComponent('This card is existed. Please try another card!');
            res.redirect('/admin/add_card?message=' + string);
        }
    })

}

module.exports = [
    common.expressParser.bodyParser,
    callbackStyle
]