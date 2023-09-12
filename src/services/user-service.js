
const {UserRepository}=require('../repositories')
const userRepo=new UserRepository;
const {StatusCodes}=require('http-status-codes');
const AppError=require('../utils/error/app-error')

async function signUp(data){
    try {
        const user=await userRepo.create(data);
        return user;
    } catch (error) {
        console.log(error)
        throw new AppError('Something went wrong while creating user', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function signIn(data){
    try {
        // check user with email is available
        // console.log(data);
        const email=data.email;
        const currentPassword=data.password;
        const User=await userRepo.findByEmail({email:email});
        // console.log(User);
        if(!User){
            throw new AppError('User is not Available With this Email', StatusCodes.BAD_REQUEST);
        }
        if(!User.comparePassword(currentPassword)){
            throw new AppError('Incorrect Password', StatusCodes.BAD_REQUEST);
        }
        const token=User.genJWT();
        return token;

    } catch (error) {
        console.log(error)
        if(error instanceof AppError){
            throw error;
        }
        throw new AppError('Something went wrong while login User', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports={
    
    signIn,
    signUp
}