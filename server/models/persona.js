'use strict';
module.exports= (sequelize, DataTypes)=>{
    const persona = sequelize.define('persona',{
        cod_persona:{
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre_1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre_2:{
            type: DataTypes.STRING,
            allowNull: true
        },
        apellido_1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido_2:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING,
              allowNull: false
        },
        telef_casa:{
            type: DataTypes.STRING
        },
        direccion_id:{
            type: DataTypes.STRING,
              allowNull: false

        },

        fecha_nacimiento:{
            type: DataTypes.DATE,
              allowNull: false
        },
        sexo:{
            type: DataTypes.STRING,
              allowNull: false
        },
        celular:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING,
              allowNull: false
        },
        pasaporte:{
            type: DataTypes.STRING
        },

    },{
        freezeTableName: true,
    });
    return persona;
};
