

async function registrar_users(req,res){
  const {primernombre,segundonombre,primerapellido,segundoapellido,cedula,nacionalidad,
	fechanacimiento,sexo,correo,clave,confirpass,telefonousuario,provincia,municipio,ciudad,
  sector,calle} = req.body;

  try {

    const newUser = await  newUser.create({
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
      });
      if(newUser){
        res.json({
          message: 'Usuario creado correctamente',
          data: newUser
        });
      }

  } catch (e) {
    console.error(newUser);
    res.status(500).json({
      message: 'hubo un error',
      data: {}
    });
  }
}
