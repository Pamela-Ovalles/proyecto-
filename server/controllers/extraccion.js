const models = require('../models/index');
//const Op = Sequelize.Op;

async function getPersonas(req,res){
res.json({
  usuarios: await models.persona.findAll(),
  });
}
async function getPersonaByCedula(req,res){
  res.json(
      {
    usuario: await models.persona.findOne({
      where:{licencia: req.params.licencia},
      limit:1,
    }),
  }
  );
}
module.exports = {
  getPersonas,
  getPersonaByCedula
};
