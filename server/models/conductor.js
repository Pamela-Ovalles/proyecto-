'use strict';
module.exports= (sequelize, DataTypes)=>{
    const conductor = sequelize.define('conductor',{
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        persona_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        freezeTableName: true,
    });
    return conductor;
};
