'use strict'
const models = require('../models/index');

var controller = {

	home: function(req, res){
		return res.render('links/loginprueba');
	},
	registrarUser: async function (req, res){

		const {primernombre,segundonombre,primerapellido,segundoapellido,cedula,fechanacimiento,
		sexo,correo,clave,telefonousuario,provincia,calle,municipio,sector} = req.body;

		const privilegio = 1;

		let usuario = await models.persona.create({
		nombre_1: primernombre,
		nombre_2: segundonombre,
		apellido_1: primerapellido,
		apellido_2: segundoapellido,
		cedula: cedula,
		fecha_nacimiento: fechanacimiento,
		sexo: sexo,
		email: correo,
		password: clave,
		celular: telefonousuario,
		provincia_id: provincia,
		municipio_id: municipio,
		sector_id: sector,
		privilegio:privilegio
		// direccion_id: Calle
	});
		// return res.json('correcto');
		return res.render('links/loginprueba');
	},
	registrarMulta: async function (req, res){

		const {} = req.body;


		let infra = await models.infracciones.create({

			descrip_infraccion: des-inf,
			precio_infraccion: pre-inf,
			persona_id: busqueda,
			policia_id: policia
	});
		return res.render('links/colocacionMultas');

	},
	enviar: async function (req, res){
		 res.render('links/colocacionMultas');
	},
	enviarPagina: async function (req, res){
		 res.render('links/registrarUsers');
	},

	registrarAutomovil: function(req, res){
 		 res.render('links/registrarVehiculo');
	},

	registrarVehiculo: async function(req, res){
		const {placa,matricula,tipoveh,color,marca,modelo,cedula,fabricación} = req.body;

		var mensaje = '';

	 let vehiculo = await models.vehiculo.create({
		 placa:placa,
		 matricula:matricula,
		 tipo_vehiculo:tipoveh,
		 color:color,
		 marca_id:marca,
		 modelo_id:modelo,
		 persona_id:cedula,
		 ano_fabricante:fabricación

 });
 		mensaje = 'CORRECTO';
	 // return res.json('correcto');
	 res.render('links/conductor', {mensaje} );
	},

	leer: function(req, res){
 		 res.render('links/prueba');
	},

	principal: async function( req, res ) {
		var params = req.body;
		var user = params.correousuario;
		var password = params.password;
		var message = '' ;
		console.log(user);
		console.log(password);
		var userObj = null;
		var sesion;


		//userObj = await	models.persona.findOne({ where:{email: user}});
		models.persona.findOne({ where: {email: user }}).then( userDataBase => {

			userObj = userDataBase;
		// console.log(userObj.email, userObj.password);
		//validar si existe
			console.log(userObj);

		if( userObj !== null && userObj !== undefined ) {
			console.log('Usuario existe');
			//validar si elusario y password son igulaes
			//nota en este if se debe usar bryct para comparar cuando se encripte
				if(  userObj.password.toLowerCase() === password.toLowerCase() && userObj.password.toUpperCase() === password.toUpperCase()  && userObj.email === user ) {

					console.log('Usuario autenticado');

						if( userObj.privilegio === 3 ) {

							message = 'Usuario autenticado como administrador ?';
							res.render('links/administrador', { message } );
							console.log(sesion);

						} else if ( userObj.privilegio === 2 ) {

							message = 'Usuario autenticado como amet ?';
							res.render('links/amet', { message } );//tienes que implementat algo para mostrar toast notification , para que se vea un mensaje cuando se inicie sesion

						} else if ( userObj.privilegio === 1 ) {

							message = 'Usuario autenticado como conductor ?';
							res.render('links/conductor', { message } );//tienes que implementat algo para mostrar toast notification , para que se vea un mensaje cuando se inicie sesion

						}

				} else {

					console.log('Password incorrecto');

					message = 'Password incorrecto';
					res.render('links/loginprueba', { message } );

				}

		} else {

			console.log('Usuario no existe');
			message = 'Error al autenticar usurario';
			res.render('links/loginprueba', { message } );
		}


	});



	//	res.render('links/amet');
	}

};

module.exports = controller;
