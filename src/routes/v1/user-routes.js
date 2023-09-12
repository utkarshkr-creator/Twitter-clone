const express=require('express')

const router=express.Router();
const {UserControllers}=require('../../controllers')
router.post('/signup',UserControllers.signUp);
router.get('/signin',UserControllers.signIn);

module.exports=router;