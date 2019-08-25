'use strict';
module.exports= (sequelize, DataTypes)=>{
    const marca = sequelize.define('marca',{
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        nom_marca:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        freezeTableName: true,
    });
    return marca;
};
