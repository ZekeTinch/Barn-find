const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Car extends Model {}

Car.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        model_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        manufacture_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'car',
    }
);

module.exports = Car;