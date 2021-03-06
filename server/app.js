'use strict'

var express = require('express');
var bodyParser = require('body-parser');
const logger = require('morgan');
// const php = require('php');

var app = express();

// cargar archivos rutas
var usuario_routes = require('./routes/usuario');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(logger('dev'));
  app.set('view engine','ejs');

//static filess
app.use(express.static(__dirname + '/public'));

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/', usuario_routes);

// exportar
module.exports = app;
