'use strict'
const models = require('../models/index');

var controller = {

	home: function(req, res){
		return res.render('links/loginprueba');
	},
	registrarUser: async function (req, res){

		const {primernombre,segundonombre,primerapellido,segundoapellido,cedula,fechanacimiento,
		sexo,correo,clave,telefonousuario,provincia,calle,casa} = req.body;

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
		// provincia_id: provincia,
		// municipio_id: municipio,
		// sector_id: sector,
		privilegio:privilegio
	});

	let direccion = await models.direccion.create({
		persona_id:cedula,
		calle:calle,
		no_casa:casa,
		provincia_id:provincia
	});
		// return res.json('correcto');
		return res.render('links/loginprueba');
	},

	registrarAgente: async function (req, res){

		const {primernombre,segundonombre,primerapellido,segundoapellido,cedula,fechanacimiento,
		sexo,correo,clave,telefonousuario,provincia,rango,funcion,tipoPoli,calle,casa} = req.body;

		const privilegio = 2;

		let agente = await models.persona.create({
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
		privilegio:privilegio,
		// calle:calle
	});

	let direccion = await models.direccion.create({
		persona_id:cedula,
		calle:calle,
		no_casa:casa,
		provincia_id:provincia
		// /provincia_id: provincia,
		// municipio_id: municipio,
		// sector_id: sector,
	});

	let policia = await models.policia.create({
		persona_id:cedula,
		rango:rango,
		cargo:funcion,
		tipo_policia:tipoPoli
	});
		// return res.json('correcto');
		return res.render('links/administrador');
	},

	registrarMulta: async function (req, res){


let infra="";
	try {
		// infra = await models.infracciones.create({
		// 	descrip_infraccion: req.body.marca + " " +req.body.modelo + " " +req.body.placa +" " +req.body.tipovehiculo,
		// 	fecha_infraccion: new Date(),
		// 	precio_infraccion: 50,
		// 	persona_id: req.body.cedula,
		// 	policia_id: req.body.policia_id,
		// 	direccion_id: 1
		// });
		//
		// await models.articulo_infraccion.create({
		// 	infraccion_id:infra.id,
		// 	articulo_id:1,
		// });
		//
		// res.json({
		// 	infraccion: infra,
		// 	});

		// if (typeof(req.body.checklist) === 'string') {
		// 	data.checklist=[req.body.checklist];
		// }

		res.json({
			data: req.body,
			});
    } catch(e) {
				res.json({error:"error",e:e});
				return ;
    }

		//return res.render('links/colocacionMultas');



	},

	enviar: async function (req, res){
		 res.render('links/colocacionMultas');
	},

	Consulta: async function (req, res){
		 res.render('links/conductor');
	},

	enviarPa: async function (req, res){
		 res.render('links/conductor');
	},

	enviarPagina: async function (req, res){
		 res.render('links/registrarUsers');
	},

	registrarAutomovil: function(req, res){
 		 res.render('links/registrarVehiculo');

	 },

 	registrarPoli: function(req, res){
  		 res.render('links/registrarPolicia');
	},

	registrarVehiculo: async function(req, res){
		const {placa,matricula,tipoveh,color,marca,modelo,cedula,fabricación} = req.body;

		var mensaje = '';


	 let vehiculo = await models.vehiculo.create({
		 persona_id:cedula,
		 placa:placa,
		 matricula:matricula,
		 tipo_vehiculo:tipoveh,
		 color:color,
		 marca_id:marca,
		 // modelo:modelo,
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
