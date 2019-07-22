'use strict'

var express = require('express');
var UserController = require('../controllers/usuario');

var router = express.Router();



router.get('', UserController.home);
router.post('/registrarUsers', UserController.registrar);
router.post('/principalAmet', UserController.principalAmet);
//router.put('')

module.exports = router;
