const mongoose=require('mongoose')
const { Schema } = mongoose;

const tweetSchema = new Schema({
     content:{
        type:String,
     },
     likes:{
        type:Number,
        default:0,
     },
     noOfRetweets:{
        type:Number,
        default:0,
     },
     comment:{
        type:String,
        default:''
     }
});

const Tweet=mongoose.model('Tweet',tweetSchema);

module.exports=Tweet
