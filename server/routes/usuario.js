'use strict'

var express = require('express');
var UserController = require('../controllers/usuario');
var Direcciones = require('../controllers/direcciones');
var Marcas = require('../controllers/seleccionMarcas');
var Extracciones = require('../controllers/extraccion');


var router = express.Router();

router.get('', UserController.home);
router.get('/registrarUsers', UserController.enviarPagina);
router.post('/registrarUsers', UserController.registrarUser);
router.post('/amet', UserController.principal);
router.get('/colocacionMultas', UserController.aplicarMulta);
router.post('/colocacionMultas', UserController.registrarUser);
router.post('/getPro', Direcciones.getProvincia);
router.post('/getDirecciones', Direcciones.getProvincia);
router.post('/getMarca', Marcas.getMarcas);
router.get('/getPersonaByCedula/:licencia', Extracciones.getPersonaByCedula);
router.get('/getPersonas', Extracciones.getPersonas);
router.get('/registrarAuto', UserController.registrarAutomovil);
router.post('/registrarVehiculo', UserController.registrarVehiculo);
//router.post('/prueba',UserController.leer);
//router.put('')

module.exports = router;
