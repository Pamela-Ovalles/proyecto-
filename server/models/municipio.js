'use strict';
module.exports= (sequelize, DataTypes)=>{
    const municipio = sequelize.define('municipio',{
        cod_municipio:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        nom_municipio:{
            type: DataTypes.STRING,
            allowNull: false
        },
        sector_id:{
            type: DataTypes.STRING,
            allowNull: true
        },

    },{
        freezeTableName: true,
    });
    return municipio;
};
