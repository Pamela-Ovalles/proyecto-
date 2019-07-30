'use strict'
const models = require('../models/index');
console.log(models);
var controller = {

	home: function(req, res){

 return res.render('links/loginprueba');
	},
	registrar: async function (req, res){

	const {primernombre,segundonombre,primerapellido,segundoapellido,cedula,nacionalidad,
	fechanacimiento,sexo,correo,clave,confirpass,telefonousuario,provincia,municipio,ciudad,
  sector,calle} = req.body;

	const newUsuario = {
		primernombre,
		segundonombre,
		primerapellido,
		segundoapellido,
		cedula,nacionalidad,
		fechanacimiento,
		sexo,
		correo,
		clave,
		confirpass,
		telefonousuario,
		provincia,municipio,
		ciudad,
	  sector,
		calle
		};
		 res.render('links/registrarUsers');
	},

	aplicarMulta: function(req, res){
 		 res.render('links/colocacionMultas');
	},

	principalAmet: function(req, res){
		var params = req.body;

		var user = params.email;
		var password = params.password;

		console.log(user);
		console.log(password);
		res.render('links/principalAmet');
	}
};

module.exports = controller;
