const mongoose=require('mongoose')
const { Schema } = mongoose;

const hashTagSchema = new Schema({
    text:{
        type:String,
        required:[true, "Must contains some text"],
        unique:true,
    },
    tweets:[
        {
            type:Schema.Types.ObjectId
        }
    ]
});

const Hashtag=mongoose.model('Hashtag',hashTagSchema);

module.exports=Hashtag