const models = require('../models/index');
//const Op = Sequelize.Op;

async function getAgentes(req,res){
res.json({
  usuarios: await models.persona.findAll(),
  });
}
async function getAgentesDigesset(req,res){
  res.json(
      {
    usuario: await models.persona.findOne({
      where:{
        cedula: req.params.cedula,
        privilegio: 2
      },
      limit:1,
    }),
  }
  );
}
module.exports = {
  getAgentes,
  getAgentesDigesset
};
