const {TweetRepository, LikeRepository}=require('../repositories')
const TweetRepo=new TweetRepository();
const LikeRepo=new LikeRepository();
const {StatusCodes}=require('http-status-codes');
const AppError=require('../utils/error/app-error')


async function toggelLike(data){
    try {
        let likeable;
        // console.log(data);
        if(data.modelType=="Tweet"){
            likeable=await TweetRepo.get(data.modelId);
        }
        else if(data.modelType=="Comment"){
            //todo
        }
        else{
            throw error;
        }
        const exists=await LikeRepo.findOne({
            user:data.userId,
            onModel:data.modelType,
            likeable:data.modelId
        });
        if(exists){
            const res=likeable.likes.pull(exists.id);
            // console.log("likes pull from model response", res);
            await likeable.save();
            const deleteResponse=await LikeRepo.destroy(exists.id);
            // console.log("delete Response", deleteResponse);

        }
        else{
            const newLike=await LikeRepo.create({
                user:data.userId,
                onModel:data.modelType,
                likeable:data.modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            
        }
        return true;
    } catch (error) {
        console.log(error)
        throw new AppError('Something went wrong while togelling Like', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    toggelLike,
}