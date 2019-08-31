const express=require('express');
const port=10;
const app=express();
const db=require('./config/mongoose');
const bodyParser=require('body-parser');

// set view engine and views 
app.set('view engine','ejs');
app.set('views','./views');

// css file include
app.use(express.static('assets'));

// for parsing req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router
app.use('/',require('./routers/index'));

app.listen(port,function(err){
    if(err)
    console.log(`ERROR : ${err}`);

    console.log(`server is up and running at port : ${port}`);
});