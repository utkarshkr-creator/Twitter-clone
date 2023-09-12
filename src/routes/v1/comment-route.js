const express=require('express')

const router=express.Router();
const {CommentControllers}=require('../../controllers')

router.post('/',CommentControllers.createComment);

module.exports=router;