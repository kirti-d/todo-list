const item=require('../model/item');

module.exports.add=function(req,res){

    // create a document in database

    item.create({
        description:req.body.description,
        date:req.body.date,
        category:req.body.category
    },function(err,item){
        // if error while creating
        if(err){
            console.log('error in creating item');
            return;
        }
        // if success go back to home.ejs
        res.redirect('back');
    });
   
};