'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MatchDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            MatchDetail.belongsTo(models.Match, { foreignKey: 'matchId', targetKey: 'id', as: 'matchDetailData' })
            MatchDetail.belongsTo(models.Player, { foreignKey: 'playerId', targetKey: 'id', as: 'playerMatchDetailData' })
        }
    };
    MatchDetail.init({
        matchId: DataTypes.INTEGER,
        time: DataTypes.DATE,
        playerId: DataTypes.INTEGER,
        goal: DataTypes.INTEGER,
        assist: DataTypes.INTEGER,
        yellowCard: DataTypes.INTEGER,
        redCard: DataTypes.INTEGER,
        badAttitude: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'MatchDetail',
    });
    return MatchDetail;
};