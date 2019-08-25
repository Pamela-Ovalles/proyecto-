'use strict';
module.exports= (sequelize, DataTypes)=>{
    const modelo = sequelize.define('modelo',{
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        nombre_modelo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        marca_id:{
            type: DataTypes.STRING,
            allowNull: true
        
        }
    },{
        freezeTableName: true,
    });
    return modelo;
};
