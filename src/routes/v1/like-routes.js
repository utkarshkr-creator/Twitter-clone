const express=require('express')

const router=express.Router();
const {LikeControllers}=require('../../controllers')

router.post('/',LikeControllers.toggelLike);

module.exports=router;