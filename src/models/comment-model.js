const mongoose=require('mongoose')
const { Schema } = mongoose;

const commentSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true,'User is required']
    },
    likes: [
        {
          type: Schema.Types.ObjectId,
          ref: "Like",
        },
    ],
    comments: [
        {
          type: Schema.Types.ObjectId,
          ref: "Comment",
        },
    ],

    onModel:{
        type:String,
        required:true,
        enum:["Tweet","Comment"]
    },
    commentable:{
        type:Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    }
});

const Comment=mongoose.model('Comment',commentSchema);

module.exports=Comment