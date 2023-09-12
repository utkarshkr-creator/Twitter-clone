const {CommentRepository, HashtagRepository}=require('../repositories')
const CommentRepo=new CommentRepository();
const HashtagRepo=new HashtagRepository();
const {StatusCodes}=require('http-status-codes');
const AppError=require('../utils/error/app-error')

async function createTweet(data){
    try {
      
        const Comment=await CommentRepo.create(data);
        return Comment;
       
    } catch (error) {
        console.log(error)
        throw new AppError('Something went wrong while creating tweet', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAllTweets(){
    try {
        const Tweets=await TweetRepo.getAll();
        return Tweets;
    } catch (error) {
        console.log(error)
        throw new AppError('Something went wrong while creating tweet', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createTweet,
    getAllTweets
}