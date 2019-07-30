'use strict';
module.exports= (sequelize, DataTypes)=>{
    const policia = sequelize.define('policia',{
        cod_policia:{
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
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
        },


    },{
        freezeTableName: true,
    });
    return policia;
};
