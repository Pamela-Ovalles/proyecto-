'use strict';
module.exports= (sequelize, DataTypes)=>{
    const provincia = sequelize.define('provincia',{
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        nom_provincia:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        freezeTableName: true,
    });
    return provincia;
};
