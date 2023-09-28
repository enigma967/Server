const bodyParser = require('body-parser');

const express =require('express');
const post_route= express();

post_route.use(bodyParser.json());
post_route.use(bodyParser.urlencoded({extended:true}));

const multer = require ('multer');
const path = require('path');

post_route.use(express.static('public'));

const storage= multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, '../public/postImages'), (error, success)=>{
            if(error){
                console.log(error);
            }
        });


    },
    filename:(req, file, cb)=>{
       const name= Date.now()+'-'+file.originalname;
        cb(null, name, (error, success)=>{
            if(error){
                console.log(error);
            }
        });
    }
});

const upload = multer({storage:storage});

const postController = require ('../controllers/postController')
post_route.post('/create-post',upload.single('image'), postController.createPost);
// post_route.post('/create-post', (req, res)=>{
//     res.send('hii');
// });


const storageC= multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, '../public/AadharCard'), (error, success)=>{
            if(error){
                console.log(error);
            }
        });


    },
    filename:(req, file, cb)=>{
       const name= Date.now()+'-'+file.originalname;
        cb(null, name, (error, success)=>{
            if(error){
                console.log(error);
            }
        });
    }
});

const uploadC = multer({storage:storageC});


const CitizenPost = require ('../controllers/CitizenPost');
post_route.post('/create-citizen', uploadC.single('AadharCard'), CitizenPost.createCitizen);


const storageO= multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, '../public/OrganisationIdCard'), (error, success)=>{
            if(error){
                console.log(error);
            }
        });


    },
    filename:(req, file, cb)=>{
       const name= Date.now()+'-'+file.originalname;
        cb(null, name, (error, success)=>{
            if(error){
                console.log(error);
            }
        });
    }
});

const uploadO = multer({storage:storageO});


const OrganisationPost = require ('../controllers/OrganisationPost');
post_route.post('/create-organisation', uploadO.single('OrganisationIdCard'), OrganisationPost.createOrganisation);

const storageL= multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, '../public/LawyerLicenseCard'), (error, success)=>{
            if(error){
                console.log(error);
            }
        });


    },
    filename:(req, file, cb)=>{
       const name= Date.now()+'-'+file.originalname;
        cb(null, name, (error, success)=>{
            if(error){
                console.log(error);
            }
        });
    }
});

const uploadL = multer({storage:storageL});


const LawyerPost = require ('../controllers/LawyerPost');
post_route.post('/create-lawyer', uploadL.single('LawyerLicenseCard'), LawyerPost.createLawyer);



module.exports = post_route; 

