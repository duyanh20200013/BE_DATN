'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Player extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Player.belongsTo(models.Team, { foreignKey: 'teamId', targetKey: 'id', as: 'teamPlayerData' })
            Player.hasMany(models.MatchDetail, { foreignKey: 'playerId', as: 'playerMatchDetailData' })
            Player.hasMany(models.FundCollectDetail, { foreignKey: 'playerId', as: 'playerCollectDetailData' })
        }
    };
    Player.init({
        name: DataTypes.STRING,
        number: DataTypes.STRING,
        teamId: DataTypes.INTEGER,
        phone: DataTypes.STRING,
        isCaptain: DataTypes.BOOLEAN,
        position: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Player',
    });
    return Player;
};