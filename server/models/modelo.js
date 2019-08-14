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
        marca:{
            type: DataTypes.STRING,
            allowNull: true
        },
        ano_fabricante:{
            type: DataTypes.DATE,
              allowNull: false
        },
        no_motor:{
            type: DataTypes.STRING,
              allowNull: false
        },
        cant_pasajero:{
            type: DataTypes.STRING
        },
        fuerza_motriz:{
            type: DataTypes.STRING,
              allowNull: false
        },
        cap_carga:{
            type: DataTypes.STRING
        },
        cilindros:{
            type: DataTypes.INTEGER
        },
        no_puerta:{
            type: DataTypes.INTEGER
        }
    },{
        freezeTableName: true,
    });
    return modelo;
};
