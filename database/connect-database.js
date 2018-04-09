const mongoose = require('mongoose');
const {connection} = mongoose;
const {format} = require('mongodb-uri');
const {mongodbUriOption} = require(PATH.CONFIG);

const mongodbUri = format(mongodbUriOption);

/**
 *
 * @param callback
 */
const connectDatabase = (callback) => {
    let conn = mongoose.connect(mongodbUri);
    if (callback) {
        conn
            .then(()=>callback())
            .catch(err=>callback(err));
    }
}

connection
    .on('connected', () => {
        console.info('MongoDB connected.');
    })
    .on('disconnected', () => {
        console.warn('MongoDB disconnected');
        connectDatabase();
        console.info('Reconnecting...');
    })
    .on('error', err => {
        console.error(err.message);
    })

module.exports = connectDatabase