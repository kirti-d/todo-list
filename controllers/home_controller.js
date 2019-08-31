const item =require('../model/item');

module.exports.home=function(req,res){

    // find all items and return their list to home.ejs

    item.find({},function(err,List){
        if(err){
            console.log("error in showing details");
            return;
        }
        res.render('home',{
            list:List
        });
    })

}