const {UserService}=require('../services');
const {SucessResponse,ErrorResponse}=require('../utils/common')
const {StatusCodes}=require('http-status-codes')

async function signUp(req,res){
    try {
       const user=await UserService.signUp({
          name:req.body.name,
          email:req.body.email,
          password:req.body.password
       });
        SucessResponse.data=user;
        return res
                .status(StatusCodes.ACCEPTED)
                .json(SucessResponse);
    } catch (error) {
        console.log(error)
        ErrorResponse.error=error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
async function signIn(req,res){
    try {
       const Token=await UserService.signIn({
          email:req.body.email,
          password:req.body.password
       });
        SucessResponse.data=Token;
        return res
                .status(StatusCodes.ACCEPTED)
                .json(SucessResponse);
    } catch (error) {
        console.log(error)
        ErrorResponse.error=error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports={
    signIn,
    signUp,
}