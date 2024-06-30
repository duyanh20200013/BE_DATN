'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Match extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Match.belongsTo(models.Team, { foreignKey: 'teamId', targetKey: 'id', as: 'matchTeamData' })
            Match.hasMany(models.MatchDetail, { foreignKey: 'matchId', as: 'matchDetailData' })
        }
    };
    Match.init({
        teamId: DataTypes.INTEGER,
        result: DataTypes.STRING,
        goal: DataTypes.INTEGER,
        lostGoal: DataTypes.INTEGER,
        time: DataTypes.DATE,
        description: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Match',
    });
    return Match;
};