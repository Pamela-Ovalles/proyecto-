'use strict';
module.exports= (sequelize, DataTypes)=>{
    const sector = sequelize.define('sector',{
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        nombre_sector:{
            type: DataTypes.STRING,
            allowNull: false
        },
        municipio_id:{
          type: DataTypes.INTEGER,
          allowNull: false
        }
    },{
        freezeTableName: true,
    });
    return sector;
};
