'use strict';
module.exports= (sequelize, DataTypes)=>{
    const vehiculo = sequelize.define('vehiculo',{
        placa:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        chasis:{
            type: DataTypes.STRING,
            allowNull: false
        },
        matricula:{
            type: DataTypes.STRING,
            allowNull:true
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
        marca_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        persona_id:{
            type: DataTypes.STRING,
            allowNull: false
          },
          ano_fabricante:{
              type: DataTypes.DATE,
                allowNull: false
          },
          no_motor:{
              type: DataTypes.INTEGER,
                allowNull: false
          },
          cant_pasajero:{
              type: DataTypes.INTEGER
          },
          fuerza_motriz:{
              type: DataTypes.INTEGER,
                allowNull: false
          },
          cap_carga:{
              type: DataTypes.INTEGER,
              allowNull: false
          },
          cilindros:{
              type: DataTypes.INTEGER,
              allowNull: false
          },
          no_puerta:{
              type: DataTypes.INTEGER,
              allowNull: false
        }
    },{
        freezeTableName: true,
    });
    return vehiculo;
};
