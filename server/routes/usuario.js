'use strict'

var express = require('express');
var UserController = require('../controllers/usuario');
var Direcciones = require('../controllers/direcciones');


var router = express.Router();



router.get('', UserController.home);
router.get('/registrarUsers', UserController.enviarPagina);
router.post('/registrarUsers', UserController.registrar);
router.post('/principalAmet', UserController.principalAmet);
router.get('/colocacionMultas', UserController.aplicarMulta);
router.post('/getDireccion', Direcciones.getProvincia);
//router.put('')

module.exports = router;
