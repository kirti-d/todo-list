const item =require('../model/item');

// delete the requested items

module.exports.delete=function(req,res){
    // array of id in form of json object 
    var i=req.body;

    // extract id from json object
    i=Object.keys(i);
    
    // find each item using id and delete
    for(let id of i){
    item.findByIdAndDelete(id,function(err){
        if(err){
            console.log("error in deleting item"+err);
            return;
        }
    });
}
res.redirect('back');
};
