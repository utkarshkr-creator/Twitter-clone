const express=require('express')
const router=express.Router();
const TweetRoutes=require('./Tweet-routes');
const UserRoutes=require('./user-routes');
const LikeRoutes=require('./like-routes');

router.use('/tweet',TweetRoutes);
router.use('/user',UserRoutes);
router.use('/like',LikeRoutes);

module.exports=router;