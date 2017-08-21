'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var RewardSchema = new Schema({

    title: String,
    description: String,
    ordinal: Number,
    imageURL: String,
    Created_date: {
        type: Date,
        default: Date.now
    },


});


module.exports = mongoose.model('Reward', RewardSchema);