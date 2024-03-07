const express =require('express');

const route=express.Router();

const userController=require();

const authMiddleware=require();

route.get('/profile',authMiddleware.authenticateToken,userController.get)