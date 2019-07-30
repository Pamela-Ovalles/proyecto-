'use strict';
module.exports= (sequelize, DataTypes)=>{
    const direccion = sequelize.define('direccion',{
        cod_dirrec:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
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
            allowNull: false
        },
        provinvia_id:{
            type: DataTypes.STRING
          }
    },{
        freezeTableName: true,
    });
    return direccion;
};
