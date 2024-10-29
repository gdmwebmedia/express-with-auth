const express = require('express')
const router = express.Router();
const userService = require('./userService')
const userValidator = require('../validators/userValidator')
const validate = require('../middleware/validate')

router.get('/users', userService.getAllUsers);
router.post('/users', userValidator(), validate, userService.registerUser);
router.post('/login', userService.loginUser);

module.exports = router