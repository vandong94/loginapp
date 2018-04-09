const {user} = require(PATH.MODEL);

// const deleteUser = ({query}, callback) =>{
//
// }
// const deleteUserByEmail = (email, callback) => {
//     deleteUser({
//         query: {
//             email
//         }
//     },callback)
// }
//
// const deleteUserByPhone = (phone, callback) => {
//     deleteUser({
//         query: {phone}
//     }, callback)
// }

/**
 * function check user is registered
 * @param email
 * @param callback
 */
const isRegisteredBefore = (email, callback) => {
    user.findOne({email}).exec(callback);
}

/**
 * function insert new user
 * @param email
 * @param password
 * @param name
 * @param balance
 * @param callback
 */
const registerNewAccount = ({email, password, name, balance}, callback) => {
    new user({
        name,
        email,
        password,
        balance
    }).save(callback);
}

/**
 * function check login user
 * @param email
 * @param password
 * @param callback
 */
const checkLogin = (email, password, callback) => {
    user.findOne({email, password}).exec(callback);
}

module.exports = {
    isRegisteredBefore,
    registerNewAccount,
    checkLogin,
}