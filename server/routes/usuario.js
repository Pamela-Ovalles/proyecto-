'use strict'

var express = require('express');
var UserController = require('../controllers/usuario');
var Direcciones = require('../controllers/direcciones');
var Marcas = require('../controllers/seleccionMarcas');
var Extracciones = require('../controllers/extraccion');
var Extra_Multas = require('../controllers/extra_multas');
var Agente = require('../controllers/buscarAmet');


var router = express.Router();

router.get('', UserController.home);
router.get('/registrarUsers', UserController.enviarPagina);
router.post('/registrarUsers', UserController.registrarUser);

//router.get('/registrarMulta', UserController.enviarPagina);
//router.post('/registrarMulta', UserController.registrarUser);
router.get('/conductor', UserController.enviarPa);
router.post('/conductor', UserController.Consulta);
router.post('/amet', UserController.principal);
router.get('/colocacionMultas', UserController.enviar);
router.post('/colocacionMultas', UserController.registrarMulta);
router.post('/getPro', Direcciones.getProvincia);
router.post('/getDirecciones', Direcciones.getProvincia);
router.post('/getMarca', Marcas.getMarcas);
router.get('/getPersonaByCedula/:licencia', Extracciones.getPersonaByCedula);
router.get('/getArticulo/:id', Extra_Multas.getArticuloForPersona);
router.get('/getArticulos', Extra_Multas.getArticulo);
router.get('/getAmet/:cedula', Agente.getAgentesDigesset);
router.get('/getAmet', Agente.getAgentes);
router.get('/getPersonas', Extracciones.getPersonas);
router.get('/registrarAuto', UserController.registrarAutomovil);
router.get('/registrarpoli', UserController.registrarPoli);
router.post('/registrarVehiculo', UserController.registrarVehiculo);
router.post('/registrarAgente', UserController.registrarAgente);
//router.post('/prueba',UserController.leer);
//router.put('')

module.exports = router;
