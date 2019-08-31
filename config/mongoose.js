const mongoose=require('mongoose');

// set connection 

mongoose.connect('mongodb://localhost/list_db');

// retrieve connection 
const db=mongoose.connection;

// any erroe while connecting to database 
db.on('error',console.error.bind(console,'error in connecting'));

// if connection is open 

db.once('open',function(){
    console.log("connected to database :)");
});