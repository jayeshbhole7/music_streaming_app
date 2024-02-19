const express=require('express');
const router=express.Router();
const authController =require();

router.post('/register',authController.register);
router.post('/login',authController.login);

export default router;