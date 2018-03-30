const {user} = require(PATH.MODEL);

const isRegisteredBefore = (email, callback) => {
    user.findOne({email}).exec(callback);
}
const registerNewAccount = ({email, password, name, balance}, callback) => {
    new user({
        name,
        email,
        password,
        balance
    }).save(callback);
}

const checkLogin = (email, password, callback) => {
    user.findOne({email, password}).exec(callback);
}

const updateBalance = (email, valueUpdate , callback) => {
    user.updateOne({email}, {$set: {balance: valueUpdate}}).exec(callback);
}


module.exports = {
    isRegisteredBefore,
    registerNewAccount,
    checkLogin,
    updateBalance
}