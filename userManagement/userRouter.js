const express = require('express')
const router = express.Router();
const userService = require('./userService')
const emailValidator = require('../validators/emailValidator')
const validate = require('../middleware/validate')

router.get('/users', userService.getAllUsers);
router.post('/users', emailValidator(), validate, userService.registerUser);
router.post('/login', userService.loginUser);

module.exports = router