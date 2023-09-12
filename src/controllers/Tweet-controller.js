const {TweetService}=require('../services')
const {SucessResponse,ErrorResponse}=require('../utils/common')
const {StatusCodes}=require('http-status-codes')

async function createTweet(req,res){
    try {
        const respnse=await TweetService.createTweet({
            content:req.body.content,
        })
        SucessResponse.data=respnse;
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
async function getAllTweets(req,res){
    try {
        const Tweets=await TweetService.getAllTweets();
        SucessResponse.data=Tweets;
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
    createTweet,
    getAllTweets
}