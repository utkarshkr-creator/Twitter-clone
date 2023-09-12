const express=require('express')
const router=express.Router();
const TweetRoutes=require('./Tweet-routes');

router.use('/tweet',TweetRoutes);

module.exports=router;