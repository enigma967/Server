const Citizen = require('../models/RegisterCitizenModel')

const createCitizen = async (req, res) => {
    try {

        const citizen = new Citizen({
            Username: req.body.Username,
            AadharNumber: req.body.AadharNumber,
            AadharCard: req.file.path,
            Password: req.body.Password
        });

        const postData = await citizen.save();
        res.status(200).send({ success: true, msg: 'Post Data', data: postData });


    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }

}


module.exports = {
    createCitizen
}