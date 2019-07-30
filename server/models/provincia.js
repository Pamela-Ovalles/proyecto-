'use strict';
module.exports= (sequelize, DataTypes)=>{
    const provincia = sequelize.define('provincia',{
        cod_provincia:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        nom_provincia:{
            type: DataTypes.STRING,
            allowNull: false
        },
        municipio_id:{
            type: DataTypes.STRING,
            allowNull: true
        },

    },{
        freezeTableName: true,
    });
    return provincia;
};
