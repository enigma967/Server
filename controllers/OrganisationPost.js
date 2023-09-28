const Organisation = require('../models/RegisterOrganizationModel')

const createOrganisation = async (req, res) => {
    try {

        const organisation = new Organisation({
            OrganisationName: req.body.OrganisationName,
            OrganisationIdNo: req.body.OrganisationIdNo,
            OrganisationIdCard: req.file.path,
            Password: req.body.Password
        });

        const postData = await organisation.save();
        res.status(200).send({ success: true, msg: 'Post Data', data: postData });


    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }

}


module.exports = {
    createOrganisation
}