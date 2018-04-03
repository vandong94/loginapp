const {card} = require(PATH.MODEL);

const isRegisteredBefore = (emailuser, callback) => {
    card.findOne({emailuser}).exec(callback);
}
const createNewHistory = ({emailuser, namecard, valuecard, balanceremain, cardnumber, numbercard, statuscard}, callback) => {
    new card({
        emailuser,
        namecard,
        valuecard,
        balanceremain,
        cardnumber,
        numbercard,
        statuscard,
    }).save(callback);
}


const findAllHistory = (emailuser, callback) => {
    card.find({emailuser}).exec(callback);
}

const findByNumberCard = (numbercard, callback) => {
    card.findOne({numbercard}).exec(callback);
}

const updateStatusAndDateUse = (numbercard, valueUpdate, dateuse, callback) => {
    card.updateOne({numbercard}, {$set: {statuscard: valueUpdate, dateuse: dateuse}}).exec(callback);
}

module.exports = {
    isRegisteredBefore,
    createNewHistory,
    findAllHistory,
    findByNumberCard,
    updateStatusAndDateUse
}