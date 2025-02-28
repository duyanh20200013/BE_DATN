'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasOne(models.Team, { foreignKey: 'id', as: 'userTeamData' })
        }
    };
    User.init({
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        resetToken: DataTypes.STRING,
        resetTokenExpiration: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};