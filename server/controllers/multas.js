'use strict'
const models = require('../models/index');
var controller = {
	home: function(req, res){
		return res.render('links/loginprueba');
	},
	registrar: async function (req, res){
		const {primernombre,segundonombre,primerapellido,segundoapellido,cedula} = req.body;
		let multas = await models.persona.create({
		nombre_1: primernombre,
		});

		return res.json('correcto');
	}
  enviarPagina: async function (req, res){
		 res.render('links/registrarUsers');
	}
  module.exports = controller;
