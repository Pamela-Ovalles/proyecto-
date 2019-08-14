'use strict';
module.exports= (sequelize, DataTypes)=>{
    const municipio = sequelize.define('municipio',{
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        nom_municipio:{
            type: DataTypes.STRING,
            allowNull: false
        },
        provincia_id:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },{
        freezeTableName: true,
    });
    return municipio;
};
