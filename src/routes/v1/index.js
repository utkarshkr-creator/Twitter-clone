const express=require('express')
const router=express.Router();
const TweetRoutes=require('./Tweet-routes');
const UserRoutes=require('./user-routes');
const LikeRoutes=require('./like-routes');
const CommentRoutes=require('./comment-route');

router.use('/tweet',TweetRoutes);
router.use('/user',UserRoutes);
router.use('/like',LikeRoutes);
router.use('/comment',CommentRoutes);

module.exports=router;