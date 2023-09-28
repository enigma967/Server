const mongoose = require('mongoose');
require('mongoose-type-email');

const citizenSchema=mongoose.Schema({
    Username:{
        type: String,
        required: true
        
    },
    AadharNumber:{
        type: Number,
        required: true
    }, 
    AadharCard:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Citizen', citizenSchema);