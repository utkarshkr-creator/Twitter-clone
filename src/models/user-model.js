const mongoose=require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        requied:[true,"User Name required"],
    },
    email:{
        type:String,
        required:[true,"User Email required"],
        unique:true
    },
    password:{
        type:String,
        requied:[true,"user Password required"],
        minLength:[6,'Too few letters'],

    },
    bio:{
        type:String
    },
    tweets:[
        {
            type:Schema.Types.ObjectId,
            ref:'Tweet'
        }
    ]
});

const User=mongoose.model('User',userSchema);

module.exports=User