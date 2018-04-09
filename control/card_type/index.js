const {card_type} = require(PATH.MODEL);

/**
 * function create numer random
 * @returns {number}
 */
const getMaxRandomInt = () => Math.floor(Number.MAX_SAFE_INTEGER * Math.random());

/**
 * function get number after random
 * @returns {number}
 */
const generateCardCode = () => {
    return getMaxRandomInt();
}

/**
 * function get all card type
 * @param callback
 */
const getAllCardType = (callback) => {
    card_type.find({}).sort({'value': 1}).exec(callback);
}

/**
 * function insert card type
 * @param cardType
 * @param callback
 */
const insertCardType = ({name, value}, callback) => {
    new card_type({
        name,
        value
    }).save(callback);
}

/**
 * function get value card
 * @param value
 * @param callback
 */
const getCardByID = (_id, callback) => {
    card_type.findOne({_id}).exec(callback);
}

/**
 * function check value card before save
 * @param value
 * @param callback
 */
const isExistedBefore = (value, callback) => {
    card_type.findOne({value}).exec(callback);
}

module.exports = {
    generateCardCode,
    getAllCardType,
    insertCardType,
    getCardByID,
    isExistedBefore
}