const {card} = require(PATH.MODEL);

/**
 * function create history buy card
 * @param user_id
 * @param type_id
 * @param balance
 * @param code
 * @param status
 * @param used_at
 * @param created_at
 * @param callback
 */
const createNewHistory = ({user_id, type_id, code, status, created_at}, callback) => {
    new card({
        user_id,
        type_id,
        code,
        status,
        created_at,
    }).save(callback);
}

/**
 * function find all history of user
 * @param user_id
 * @param callback
 */
const findHistoryByUserID = (user_id, callback) => {
    card.find({user_id}).populate('type_id', 'name').exec(callback);
}

/**
 * function find card through code
 * @param code
 * @param callback
 */
const findCardByCode = (code, callback) => {
    card.findOne({code}).exec(callback);
}

/**
 * function update status and used_at
 * @param code
 * @param status
 * @param used
 * @param callback
 */
const updateCardByCode = (code, status, used_at, callback) => {
    card.updateOne({code}, {$set: {status: status, used_at: used_at}}).exec(callback);
}

module.exports = {
    createNewHistory,
    findHistoryByUserID,
    findCardByCode,
    updateCardByCode
}