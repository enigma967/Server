const mongoose = require('mongoose');

const lawyerSchema=mongoose.Schema({
    Username:{
        type: String,
        required: true
    },
    LicenseNo:{
        type: Number,
        required: true
    }, 
    LawyerLicenseCard:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Lawyer', lawyerSchema);