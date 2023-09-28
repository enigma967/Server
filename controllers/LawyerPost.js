const Lawyer = require('../models/RegisterLawyerModel')

const createLawyer = async (req, res) => {
    try {

        const lawyer = new Lawyer({
            Username: req.body.Username,
            LicenseNo: req.body.LicenseNo,
            LawyerLicenseCard: req.file.path,
            Password: req.body.Password
        });

        const postData = await lawyer.save();
        res.status(200).send({ success: true, msg: 'Post Data', data: postData });


    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }

}


module.exports = {
    createLawyer
}