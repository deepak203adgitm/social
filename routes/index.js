const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('Router loaded!');

router.get('/', homeController.home);


router.use('/users', require('./users'));
router.use('/posts', require('./post'));
//router.use('/likes', require('./likes'));

//router.use('/api', require('./api'));

// for any further routes, access from here:
// router.use('/routerName', require('./router_file'));


module.exports = router;