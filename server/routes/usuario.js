'use strict'

var express = require('express');
var UserController = require('../controllers/usuario');
var Direcciones = require('../controllers/direcciones');
var Extracciones = require('../controllers/extraccion');

var router = express.Router();

router.get('', UserController.home);
router.get('/registrarUsers', UserController.enviarPagina);
router.post('/registrarUsers', UserController.registrar);
router.post('/amet', UserController.principalAmet);
router.get('/colocacionMultas', UserController.aplicarMulta);
router.post('/colocacionMultas', UserController.registrar);
router.post('/getDirecciones', Direcciones.getProvincia);
router.get('/getPersonaByCedula/:cedula', Extracciones.getPersonaByCedula);
router.get('/getPersonas', Extracciones.getPersonas);

//router.post('/prueba',UserController.leer);
//router.put('')

module.exports = router;
