'use strict'

var express = require('express');
var UserController = require('../controllers/usuario');

var router = express.Router();



router.get('', UserController.home);
router.get('/registrarUsers', UserController.registrar);
router.post('/principalAmet', UserController.principalAmet);
router.get('/colocacionMultas', UserController.aplicarMulta);
//router.put('')

module.exports = router;
