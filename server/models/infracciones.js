'use strict';
module.exports= (sequelize, DataTypes)=>{
    const infracciones = sequelize.define('infracciones',{
        cod_multa:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        descrip_infraccion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        art_infraccion:{
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
        conductor_id:{
            type: DataTypes.STRING,
              allowNull: false
        },
        nacionalidad:{
            type: DataTypes.STRING
        },
        direccion_id:{
            type: DataTypes.STRING,
              allowNull: false

        },
        vehiculo_id:{
            type: DataTypes.STRING,
              allowNull: false
        },
        policia_id:{
            type: DataTypes.STRING,
              allowNull: false
        },

    },{
        freezeTableName: true,
    });
    return infracciones;
};
