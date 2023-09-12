const express=require('express')
const router=express.Router();
const TweetRoutes=require('./Tweet-routes');
const UserRoutes=require('./user-routes');

router.use('/tweet',TweetRoutes);
router.use('/user',UserRoutes);

module.exports=router;