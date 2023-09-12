
const {LikeService}=require('../services')
const {SucessResponse,ErrorResponse}=require('../utils/common')
const {StatusCodes}=require('http-status-codes')


async function toggelLike(req,res){
    try {
        const like=await LikeService.toggelLike({
            userId:req.body.userId,
            modelType:req.body.modelType,
            modelId:req.body.modelId
        })
        SucessResponse.data=like;
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
   toggelLike
}