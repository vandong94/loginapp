const {card_type} = require(PATH.CONTROL);

module.exports = (req, res) => {

    let message = req.query.message;
    let balance = req.user.balance;
    card_type.getAllCardType((err, cardType) => {
        if(err) throw err;
        res.render("buy", {message: message, balance: balance, cardType: cardType});
    });
}