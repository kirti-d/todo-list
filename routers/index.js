const express = require('express');
const router=express.Router();

// router to home.ejs
router.get('/',require('../controllers/home_controller').home);

// router for adding 

router.post('/add',require('./add'));

// router for deleting

router.post('/delete',require('./delete'));

module.exports=router;


