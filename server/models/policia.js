'use strict';
module.exports= (sequelize, DataTypes)=>{
    const policia = sequelize.define('policia',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        rango:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cargo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo_policia:{
            type: DataTypes.STRING,
            allowNull: false
        },
        persona_id:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        freezeTableName: true,
    });
    return policia;
};
