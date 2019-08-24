'use strict';
module.exports= (sequelize, DataTypes)=>{
    const infracciones = sequelize.define('infracciones',{
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        descrip_infraccion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        precio_infraccion:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha_infraccion:{
            type: DataTypes.DATE,
            allowNull: false
        },
        persona_id:{
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        policia_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        freezeTableName: true,
    });
    return infracciones;
};
