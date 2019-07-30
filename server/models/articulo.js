'use strict';
module.exports= (sequelize, DataTypes)=>{
    const articulo = sequelize.define('articulo',{
        cod_articulo:{
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        desc_infraccion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        precio:{
            type: DataTypes.STRING,
            allowNull: true
        },

    },{
        freezeTableName: true,
    });
    return articulo;
};
