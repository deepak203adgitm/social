const express = require('express')
const db = require('../db/mongoos')
const user= require('../models/users')
//const user= require('../models/post')
const bodyparser = require('body-parser')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const { session } = require('passport')
const cookieparser= require('cookie-parser')
const expresssession= require('express-session')
const flash = require('connect-flash')
const methodOverride = require('method-override')
const multer = require('multer')
const { findById } = require('../models/users')
const sharp = require('sharp')
const path = require('path')
const homeController = require('../controllers/home_controller')

const routes = express.Router()


routes.use(bodyparser.urlencoded({extended:true}))


routes.use(express.static('assets'))
routes.get('/home',homeController.home);

//routes.use('/users',require('./user'));

//routes.get('/home',homeController.home);

//router.get('/profile',userController.profile);




 
module.exports = routes


