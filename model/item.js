const mongoose=require('mongoose');

// create schema for database
const schema=mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    date:{
        type:{Date:{
            "format": "%d-%m-%Y"
        }}
        
    },
    category:{
        type:String
    }
});
const item=mongoose.model('item',schema);

// export item

module.exports=item;