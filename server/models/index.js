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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// aqui van las relaciones

db.persona.hasOne(db.conductor, {foreignkey: 'persona_id',foreignkeyConstraint:true});
db.conductor.belongTo(db.persona, {foreignkey: 'persona_id',foreignkeyConstraint:true});

db.persona.hasOne(db.policia, {foreignkey:'persona_id', foreignkeyConstraint:true});
db.policia.belongTo(db.persona, {foreignkey: 'persona_id',foreignkeyConstraint:true});

//db.persona.

sequelize.sync();
module.exports = db;
