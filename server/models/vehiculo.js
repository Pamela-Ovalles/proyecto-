'use strict';
module.exports= (sequelize, DataTypes)=>{
    const vehiculo = sequelize.define('vehiculo',{
        placa:{
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        chasis:{
            type: DataTypes.STRING,
            allowNull: false
        },
        matricula:{
            type: DataTypes.STRING,
            allowNull:false
        },
        fecha_expedicion:{
            type: DataTypes.DATE,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING
        },
        tipo_emision:{
            type: DataTypes.STRING,
              allowNull: false
        },
        tipo_vehiculo:{
            type: DataTypes.STRING
        },
        color:{
            type: DataTypes.STRING,
              allowNull: false

        },
        modelo_id:{
            type: DataTypes.STRING,
              allowNull: false
        },
        conductor_id:{
            type: DataTypes.STRING
        }

    },{
        freezeTableName: true,
    });
    return vehiculo;
};
