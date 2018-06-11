const   express = require('express'),
    usersControllers = require('../controllers/user'),
    middleware = require('../middleware')

var router = express.Router({mergeParams: true})

router.route('/register')
    .post(usersControllers.createUser)

router.route('/login')
    .post(usersControllers.authUser)

router.route('/u/:id')
    .put(middleware.correctUser, usersControllers.updateUser)

router.route('/')
    .get(middleware.isLoggedIn, usersControllers.getUserData)


module.exports = router
