'use strict';
module.exports= (sequelize, DataTypes)=>{
    const conductor = sequelize.define('conductor',{
        cod_conductor:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        persona_id:{
            type: DataTypes.STRING,
            allowNull: false
        },
        vehiculo_id:{
            type: DataTypes.STRING,
            allowNull: false
        },
        infraccion_id:{
            type: DataTypes.STRING,
            allowNull: false
        },

    },{
        freezeTableName: true,
    });
    return conductor;
};
