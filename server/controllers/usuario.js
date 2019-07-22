'use strict'

//const pool = require('mysql');
var controller = {

	home: function(req, res){

	//	var params = req.body;

	//	var email = params.email;
 return res.render('links/loginprueba');//aqui coloco el nombre del archivo que quiero renderizar *debe ser .ejs*


	//	var  multas =	pool.query('SELECT * FROM MULTAS');

///	return res.render('links/loginprueba',{multas});



	},
	registrar: function(req, res){
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
		// if( params.user !==null && params.user !== '' && params.password !== null && params.password !== '' ) {
		// 	return res.render('links/registrarUser');
		// } else {
		// 	return res.status(404).send({
		// 		Ok: false
		// 	})
		// }
	}



};

module.exports = controller;
