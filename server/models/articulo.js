'use strict';
module.exports= (sequelize, DataTypes)=>{
    const articulo = sequelize.define('articulo',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        desc_infraccion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        precio:{
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        freezeTableName: true,
    });
    return articulo;
};
