const express=require('express')

const router=express.Router();
const {TweetControllers}=require('../../controllers')
router.post('/',TweetControllers.createTweet);
router.get('/',TweetControllers.getAllTweets);

module.exports=router;