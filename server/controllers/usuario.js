'use strict'
const models = require('../models/index');
var controller = {

	home: function(req, res){
		return res.render('links/loginprueba');
	},
	registrar: async function (req, res){

		const {primernombre,segundonombre,primerapellido,segundoapellido,cedula,fechanacimiento,
		sexo,correo,clave,telefonousuario,provincia,calle,municipio,sector,nacionalidad} = req.body;

		const privilegio =1;

		// <?php>
		// 	$clave = password_hash($clave,PASSWORD_DEFAULT);
		// ?>
		//
		let usuario = await models.persona.create({
		nombre_1: primernombre,
		nombre_2: segundonombre,
		apellido_1: primerapellido,
		apellido_2: segundoapellido,
		cedula: cedula,
		nacionalidad:nacionalidad,
		fecha_nacimiento: fechanacimiento,
		sexo: sexo,
		email: correo,
		password: clave,
		celular: telefonousuario,
		provincia_id: provincia,
		municipio_id: municipio,
		sector_id: sector,
		privilegio:privilegio,
		calle: calle
	});

		// return res.json('correcto');
		return res.render('links/loginprueba');
	},
	enviarPagina: async function (req, res){
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
		res.render('links/amet');
	}
};

// const {primernombre,segundonombre,primerapellido,segundoapellido,cedula,nacionalidad,
// fechanacimiento,sexo,correo,clave,confirpass,telefonousuario,provincia,municipio,ciudad,
// sector,calle} = req.body;
//
// const newUsuario = {
// 	primernombre,
// 	segundonombre,
// 	primerapellido,
// 	segundoapellido,
// 	cedula,nacionalidad,
// 	fechanacimiento,
// 	sexo,
// 	correo,
// 	clave,
// 	confirpass,
// 	telefonousuario,
// 	provincia,municipio,
// 	ciudad,
// 	sector,
// 	calle
// 	};

module.exports = controller;
