'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Team extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Team.belongsTo(models.User, { foreignKey: 'id', targetKey: 'id', as: 'userTeamData' })
            Team.hasMany(models.Player, { foreignKey: 'teamId', as: 'teamPlayerData' })
            Team.hasMany(models.Support, { foreignKey: 'teamId', as: 'teamSupportData' })
            Team.hasMany(models.FundSpend, { foreignKey: 'teamId', as: 'teamFundSpendData' })
            Team.hasMany(models.Rate, { foreignKey: 'teamId', as: 'teamRateData' })
            Team.hasMany(models.Match, { foreignKey: 'teamId', as: 'matchTeamData' })
            Team.hasMany(models.FundCollect, { foreignKey: 'teamId', as: 'teamFundCollectData' })
            Team.hasMany(models.MatchFind, { foreignKey: 'teamId', as: 'MatchFindTeamData' })
        }
    };
    Team.init({
        id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.STRING,
        balance: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: 'Team',
    });
    return Team;
};