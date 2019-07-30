'use strict';
module.exports= (sequelize, DataTypes)=>{
    const adm_tipo_proveedor = sequelize.define('client',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        phone_number:{
            type: DataTypes.STRING
        },
        address:{
            type: DataTypes.TEXT
        },
        person_id:{
            type: DataTypes.STRING
        },
        born_date:{
            type: DataTypes.DATE
        },
        sex:{
            type: DataTypes.STRING
        },
        username:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        photo:{
            type: DataTypes.BLOB,
            length: 'medium'
        },
        disability:{
            type: DataTypes.STRING
        }
    },{
        freezeTableName: true,
    });
    return adm_tipo_proveedor;
};
