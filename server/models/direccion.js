'use strict';
module.exports= (sequelize, DataTypes)=>{
    const direccion = sequelize.define('direccion',{
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        calle:{
            type: DataTypes.STRING,
            allowNull: false
        },
        no_casa:{
            type: DataTypes.STRING,
            allowNull: true
        },
        nom_res:{
            type: DataTypes.STRING,
            allowNull: true
        },
        provincia_id:{
            type: DataTypes.INTEGER
        }
    },{
        freezeTableName: true,
    });
    return direccion;
};
