const express=require('express');
const path=require('path');
const port=8000;

const db=require('./config/mongoose');

const app=express();

app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',require('./routes/index.js'))

app.listen(port,(err)=>{
    if(err){
        console.log("Error occured in firing up the express server:",err);
        return;
    }
    console.log("The express server is up and running on port:",port)
})