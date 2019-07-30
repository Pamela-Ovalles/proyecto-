'use strict';
module.exports= (sequelize, DataTypes)=>{
    const ciudad = sequelize.define('ciudad',{
        cod_ciudad:{
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre_ciudad:{
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
    return ciudad;
};
