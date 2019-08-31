// router for deleting item from list

const express=require('express');
const router = express.Router();

router.post('/delete',require('../controllers/delete_controller').delete);
module.exports=router;