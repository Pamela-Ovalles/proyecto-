'use strict';

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(__filename);
var db        = {};
var Sequelize = require('sequelize');

const Op = Sequelize.Op;
const DBNAME = 'proyecto';
const USER = 'postgres';
const PASSWORD = 'Pamela0791';
const LOCALHOST = '127.0.0.1';

var sequelize = new Sequelize(DBNAME, USER, PASSWORD, {
    host: LOCALHOST,
    dialect: 'postgres',
    port: 5432,
    logging: false,

    pool: {
        max: 5,
        min: 0,
        idle: 20000,
        acquire: 80000
    },
    acquire: 80000,
    operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like
    },
    define: {
        freezeTableName: true
    }
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    }).forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

// aqui van las relaciones

// db.persona.hasOne(db.conductor, {foreignKey: 'persona_id',foreignKeyConstraint:true});
// db.conductor.belongsTo(db.persona, {foreignKey: 'persona_id',foreignKeyConstraint:true});

db.vehiculo.belongsTo(db.persona,{foreignKey:'persona_id',foreignKeyConstraint:true});
// db.conductor.hasMany(db.vehiculo,{foreignKey:'conductor_id',foreignKeyConstraint:true});
db.persona.hasMany(db.vehiculo,{foreignKey:'persona_id',foreignKeyConstraint:true});

db.direccion.belongsTo(db.provincia,{foreignKey:'provincia_id',foreignKeyConstraint:true});
db.provincia.hasMany(db.direccion,{foreignKey:'provincia_id',foreignKeyConstraint:true});

db.municipio.belongsTo(db.provincia,{foreignKey:'provincia_id',foreignKeyConstraint:true});
db.provincia.hasMany(db.municipio,{foreignKey:'provincia_id',foreignKeyConstraint:true});

db.infracciones.belongsTo(db.persona,{foreignKey:'persona_id',foreignKeyConstraint:true});
// db.conductor.hasMany(db.infracciones,{foreignKey:'conductor_id',foreignKeyConstraint:true});
db.persona.hasMany(db.infracciones,{foreignKey:'persona_id',foreignKeyConstraint:true});

db.infracciones.belongsTo(db.direccion,{foreignKey:'direccion_id',foreignKeyConstraint:true});
db.direccion.hasOne(db.infracciones,{foreignKey:'direccion_id',foreignKeyConstraint:true});

db.infracciones.belongsTo(db.policia,{foreignKey:'policia_id',foreignKeyConstraint:true});
db.policia.hasMany(db.infracciones,{foreignKey:'policia_id',foreignKeyConstraint:true});

db.persona.belongsTo(db.direccion,{foreignKey:'direccion_id',foreignKeyConstraint:true});
db.direccion.hasOne(db.persona, {foreignKey:'direccion_id', foreignKeyConstraint:true});

db.persona.hasOne(db.policia, {foreignKey:'persona_id', foreignKeyConstraint:true});
db.policia.belongsTo(db.persona, {foreignKey: 'persona_id',foreignKeyConstraint:true});

db.municipio.hasMany(db.sector,{foreignKey:'municipio_id',foreignKeyConstraint:true});
db.sector.belongsTo(db.municipio,{foreignKey:'municipio_id',foreignKeyConstraint:true});

db.vehiculo.belongsTo(db.modelo,{foreignKey:'modelo_id',foreignKeyConstraint:true});
db.modelo.hasMany(db.vehiculo,{foreignKey:'modelo_id',foreignKeyConstraint:true});

db.vehiculo.belongsTo(db.modelo,{foreignKey:'modelo_id',foreignKeyConstraint:true});
db.modelo.hasMany(db.vehiculo,{foreignKey:'modelo_id',foreignKeyConstraint:true});

db.infracciones.hasMany(db.articulo_infraccion,{foreignKey:'infraccion_id',foreignKeyConstraint:true});
db.articulo_infraccion.belongsTo(db.infracciones,{foreignKey:'infraccion_id',foreignKeyConstraint:true});
db.articulo_infraccion.belongsTo(db.articulo,{foreignKey:'articulo_id',foreignKeyConstraint:true});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.sync();
// sequelize.sync({force:true});

module.exports = db;
