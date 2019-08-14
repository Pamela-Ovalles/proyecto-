'use strict';
module.exports= (sequelize, DataTypes)=>{
    const articulo = sequelize.define('articulo_infraccion',{
        articulo_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        infraccion_id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
        }
    },{
        freezeTableName: true,
    });
    return articulo;
};
