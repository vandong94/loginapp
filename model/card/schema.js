const {Schema} = require("mongoose");

 module.exports = Schema({
     user_id: {
         type: Schema.ObjectId,
         ref: 'user'
     },
     type_id: {
         type: Schema.ObjectId,
         ref: 'card_type'
     },
     code: String,
     status: {
         type: Number,
         default: 0
     },
     created_at: {
         type: Date,
         default: Date.now
     },
     used_at: Date
 });