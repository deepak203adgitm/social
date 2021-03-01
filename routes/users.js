const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/user_controllers');

// router.use('/', require('./posts'));

router.get(
  '/profile',
  passport.checkAuthentication,
  usersController.profile
);


router.get('/home',
    passport.checkAuthentication,
  usersController.home
  );


router.post(
  '/update/:id',
  passport.checkAuthentication,
  usersController.update
);

router.get('/sign-in', usersController.signIn);
router.get('/sign-up', usersController.signUp);

router.post('/create', usersController.create);
//router.post('/create-session', usersController.create);

// use passport as a middleware to authenticate
router.post(
  '/create-session',
  passport.authenticate('local', { failureRedirect: '/users/sign-in' }),
  usersController.createSession
);

router.get('/sign-out', usersController.destorySession);

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/users/sign-in' }),
  usersController.createSession
);


module.exports = router;