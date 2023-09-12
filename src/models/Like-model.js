const mongoose=require('mongoose')
const { Schema } = mongoose;

const likeSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    onModel:{
        type:String,
        required:true,
        enum:["Tweet","Comment"]
    },
    likeable:{
        type:Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'

    }
});

const Like=mongoose.model('Like',likeSchema);

module.exports=Like