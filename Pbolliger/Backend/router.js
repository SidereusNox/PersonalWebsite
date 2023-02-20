const express = require('express');
const router = express.Router();
const indexController = require('./indexController');
const loginController = require('./loginController');

router.get('/', indexController.get);
router.post('login', loginController.handleLogIn);

module.exports = router;