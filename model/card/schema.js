const {Schema} = require("mongoose");

 module.exports = Schema({
     emailuser: String,
     namecard: String,
     valuecard: Number,
     balanceremain: Number,
     cardnumber: String,
     numbercard: String,
     statuscard: {
         type: String,
         default: 0
     },
     datebuy: {
        type: Date,
        default: Date.now
    },
    dateuse: Date,
 });