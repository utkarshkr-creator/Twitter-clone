const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
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
},{timestamps:true});

//https://mongoosejs.com/docs/middleware.html#pre
//middleware pre

userSchema.pre('save',function(next){
    const user=this;
    const salt=bcrypt.genSaltSync(9);
    const encryptPassword=bcrypt.hashSync(user.password,salt);
    user.password=encryptPassword;
    next();

})

//https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
//static methods for its model.
userSchema.methods.comparePassword=function compare(password){
    const user=this;
    return bcrypt.compareSync(password,user.password);
}

userSchema.methods.genJWT=function generate(){
    return jwt.sign(
    {
        id:this._id,
        email:this.email
    },
    'twitter_secret',
    {
        expiresIn:'2 days'
    })

}
//https://www.passportjs.org/packages/passport-jwt/ for auth

const User=mongoose.model('User',userSchema);



module.exports=User