const mongoose = require('mongoose');

const organisationSchema=mongoose.Schema({
    OrganisationName:{
        type: String,
        required: true
    },
    OrganisationIdNo:{
        type: Number,
        required: true
    }, 
    OrganisationIdCard:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Organisation', organisationSchema);