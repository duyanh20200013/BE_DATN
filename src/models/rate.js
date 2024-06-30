'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rate extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Rate.belongsTo(models.Team, { foreignKey: 'teamId', targetKey: 'id', as: 'teamRateData' })
            Rate.belongsTo(models.Team, { foreignKey: 'oppositeTeamId', targetKey: 'id', as: 'oppositeTeamRateData' })
        }
    };
    Rate.init({
        teamId: DataTypes.INTEGER,
        oppositeTeamId: DataTypes.INTEGER,
        content: DataTypes.STRING,
        star: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Rate',
    });
    return Rate;
};