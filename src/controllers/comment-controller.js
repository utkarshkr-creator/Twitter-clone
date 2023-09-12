
const {CommentService}=require('../services')
const {SucessResponse,ErrorResponse}=require('../utils/common')
const {StatusCodes}=require('http-status-codes')


async function createComment(req,res){
    try {
        const comment=await CommentService.createComment({
            content:req.body.content,
            userId:req.body.userId,
            modelType:req.body.modelType,
            modelId:req.body.modelId
        })
        SucessResponse.data=comment;
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
   createComment
}