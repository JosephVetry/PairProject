const express = require('express')
const UserController = require('../controllers/usercontroller/controller')
const AuthController = require('../controllers/authcontroller/controller')
const router = express.Router()

router.get('/', UserController.home)
router.get('/signup',AuthController.signup)
router.post('/signup',AuthController.postSignup)
router.get('/login',AuthController.login)
router.post('/login',AuthController.postLogin)
router.get('/profile',AuthController.postProfile)
router.post('/profile',AuthController.postProfile)

module.exports = router