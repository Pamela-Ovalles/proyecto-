const models = require('../models/index');

async function getArticulo(req,res){
res.json({
  usuarios_articulos: await models.articulo.findAll(),
  });
}

async function getArticuloForPersona(req,res){
  res.json(
      {
    usua_arti: await models.articulo.findOne({
      where:{id: req.params.id},
      limit:1,
    }),
  }
  );
}
module.exports = {
  getArticulo,
  getArticuloForPersona
};
