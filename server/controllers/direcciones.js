
const models = require('../models/index');

async function getProvincia(req,res){
  res.json({
    provincias:  await  models.provincia.findAll(),
    municipios:  await  models.municipio.findAll(),
    sectores:  await  models.sector.findAll(),
  });
}

module.exports = {
  getProvincia
};
