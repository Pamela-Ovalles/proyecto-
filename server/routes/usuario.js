'use strict'

var express = require('express');
var UserController = require('../controllers/usuario');

var router = express.Router();



router.get('', UserController.home);
router.get('/menu', UserController.menu);
//router.post('/save-user', UserController.saveUser);
//router.put('')

module.exports = router;
