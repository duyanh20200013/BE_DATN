'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MatchFind extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            MatchFind.belongsTo(models.Team, { foreignKey: 'teamId', targetKey: 'id', as: 'MatchFindTeamData' })
        }
    };
    MatchFind.init({
        teamId: DataTypes.INTEGER,
        phone: DataTypes.STRING,
        start: DataTypes.DATE,
        end: DataTypes.DATE,
        location: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.STRING,
        rate: DataTypes.INTEGER,
        level: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'MatchFind',
    });
    return MatchFind;
};