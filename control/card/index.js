const {card} = require(PATH.MODEL);

const isRegisteredBefore = (emailuser, callback) => {
    card.findOne({emailuser}).exec(callback);
}
const createNewHistory = ({emailuser, namecard, valuecard, balanceremain}, callback) => {
    new card({
        emailuser,
        namecard,
        valuecard,
        balanceremain
    }).save(callback);
}

module.exports = {
    isRegisteredBefore,
    createNewHistory
}