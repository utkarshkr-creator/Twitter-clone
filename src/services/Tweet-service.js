const {TweetRepository, HashtagRepository}=require('../repositories')
const TweetRepo=new TweetRepository();
const HashtagRepo=new HashtagRepository();
const {StatusCodes}=require('http-status-codes');
const AppError=require('../utils/error/app-error')

async function createTweet(data){
    try {
        const content=data.content;
        const tags=content.match(/#[a-zA-Z0-9(-)]+/g).map((tag)=>tag.substr(1).toLowerCase());
        // create tweet document
        const Tweet=await TweetRepo.create(data);

        //storing the hashtag
        let alreadyPresentTags=await HashtagRepo.findByName(tags);
        let textOfPresentTags=alreadyPresentTags.map(tag=>tag.text);
        let newTags=tags.filter(tag=>!textOfPresentTags.includes(tag));
        // creating new hashtag
        newTags= newTags.map(tag=>{
            return{
                text:tag,
                tweets:[Tweet.id]
            }
        })
        await HashtagRepo.bulkCreate(newTags);

        // adding tweet id to already present hashtags
        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(Tweet.id);
            tag.save();

        })
        return Tweet;
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