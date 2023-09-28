const bodyParser = require('body-parser');


const express = require('express');
const authentication = express();

authentication.use(bodyParser.json());
authentication.use(bodyParser.urlencoded({ extended: true }));


// const multer = require ('multer');
// const path = require('path');


const Citizen = require('../models/RegisterCitizenModel');


authentication.post('/check',  async (req, res) => {
    console.log(req.body);
    const Username = req.body.Username;
    const Password = req.body.Password;
    

    await Citizen.findOne({
        Username: Username
    }).then(user => {
        if (user) {
            if (user.Password === Password) {
                res.json(
                    {user}
                )
            }
            
            else {
                res.json(
                    "login failed"
                )
            }
        } else {
            res.json(
                "user not found"
            )
        }

    }).then(error => {
        console.log(error)
    })



});

module.exports = authentication;

