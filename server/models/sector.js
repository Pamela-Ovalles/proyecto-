'use strict';
module.exports= (sequelize, DataTypes)=>{
    const sector = sequelize.define('sector',{
        cod_sector:{
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre_sector:{
            type: DataTypes.STRING,
            allowNull: false
        },


    },{
        freezeTableName: true,
    });
    return sector;
};
