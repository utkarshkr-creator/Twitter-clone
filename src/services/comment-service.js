const {CommentRepository, TweetRepository}=require('../repositories')
const CommentRepo=new CommentRepository();
const TweetRepo=new TweetRepository();
const {StatusCodes}=require('http-status-codes');
const AppError=require('../utils/error/app-error')

async function createComment(data){
    try {
        let commentable;
        // console.log(data);
        if(data.modelType=="Tweet"){
            commentable=await TweetRepo.get(data.modelId);
        }
        else if(data.modelType=="Comment"){
            //todo
            commentable=await CommentRepo.get(data.modelId);
        }
        else{
            throw error;
        }
        const Comment=await CommentRepo.create({
            content:data.content,
            user:data.userId,
            onModel:data.modelType,
            commentable:data.modelId
        });
        await commentable.comments.push(Comment);
        await commentable.save();
        return Comment;  
    } catch (error) {
        console.log(error)
        throw new AppError('Something went wrong while creating comment', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports={
    createComment
}