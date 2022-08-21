const express=require('express');
const users_controller=require('../controllers/users_controller.js')
const router=express.Router();

router.get('/sign-in',users_controller.signin)
router.get('/sign-up',users_controller.signup)

router.post('/create',users_controller.create)
router.post('/create-session',users_controller.createSession)

router.get('/profile',users_controller.profile)

router.post('/destroy-session',users_controller.destroySession);

module.exports=router
