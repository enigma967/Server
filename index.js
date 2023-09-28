const express =require('express');
const app= express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}))

const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ourDB');

const post_route= require('./routes/postRoute'); 
app.use('/api',post_route);

const authentication= require('./routes/authentication'); 
app.use('/login', authentication);



app.listen(8000, ()=>{
    console.log('Server is running');
})



