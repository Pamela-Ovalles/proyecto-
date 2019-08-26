'use strict'

var express = require('express');
var UserController = require('../controllers/usuario');
var Direcciones = require('../controllers/direcciones');
var Extracciones = require('../controllers/extraccion');
var Extra_Multas = require('../controllers/extra_multas');


var router = express.Router();

router.get('', UserController.home);
router.get('/registrarUsers', UserController.enviarPagina);
router.post('/registrarUsers', UserController.registrar);
router.post('/amet', UserController.principalAmet);
router.get('/colocacionMultas', UserController.aplicarMulta);
router.post('/colocacionMultas', UserController.registrar);
router.post('/getPro', Direcciones.getProvincia);
router.post('/getDirecciones', Direcciones.getProvincia);
router.get('/getPersonaByCedula/:licencia', Extracciones.getPersonaByCedula);
router.get('/getArticulo/:id', Extra_Multas.getArticuloForPersona);
router.get('/getArticulos', Extra_Multas.getArticulo);
router.get('/getPersonas', Extracciones.getPersonas);
router.get('/registrarVehiculo', UserController.registrarVehiculo);
//router.post('/prueba',UserController.leer);
//router.put('')

module.exports = router;
