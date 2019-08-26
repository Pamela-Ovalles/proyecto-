const models = require('../models/index');

async function getMarcas(req,res){
  res.json({
    marcas:  await  models.marca.findAll(),
    modelos:  await  models.modelo.findAll(),
    });
}

module.exports = {
  getMarcas
};
