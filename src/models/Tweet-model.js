const mongoose=require('mongoose')
const { Schema } = mongoose;

const tweetSchema = new Schema({
     content:{
        type:String,
        required:[true,'Must be some content with tweet'],
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
     },
     
},{timestamps:true});

const Tweet=mongoose.model('Tweet',tweetSchema);

module.exports=Tweet
