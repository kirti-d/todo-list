
// router for adding item to list 
const exp=require('express');

const router=exp.Router();

router.post('/add',require('../controllers/add_controller').add);

module.exports= router;