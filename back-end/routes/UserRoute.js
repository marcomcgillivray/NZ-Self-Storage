const express = require('express');
const UserController = require('../controllers/UserController');
const authController = require('../controllers/AuthController');

const router = express.Router();

router.post('/signup', authController.signUpUser)
router.post('/login', authController.loginUser)

router.route('/')
.get(UserController.getUsers)
.post(UserController.createUser);


router.route('/:id')
.get(UserController.getUser)
.delete(UserController.deleteUser);





module.exports = router;