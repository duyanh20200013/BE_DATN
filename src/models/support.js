'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Support extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Support.belongsTo(models.Team, { foreignKey: 'teamId', targetKey: 'id', as: 'teamSupportData' })
        }
    };
    Support.init({
        name: DataTypes.STRING,
        number: DataTypes.STRING,
        teamId: DataTypes.INTEGER,
        position: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Support',
    });
    return Support;
};