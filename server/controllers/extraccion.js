const models = require('../models/index');
//const Op = Sequelize.Op;

async function getPersonas(req,res){
res.json({
  usuarios: await models.persona.findAll(),
  });
}
async function getPersonaByCedula(req,res){
  res.json({
    usuarios: await models.persona.findAll({
      limit:1,
      where:{cedula: req.params.cedula}
    }),
  });
}
module.exports = {
  getPersonas,
  getPersonaByCedula
};
