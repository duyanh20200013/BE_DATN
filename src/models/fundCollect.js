'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FundCollect extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            FundCollect.belongsTo(models.Team, { foreignKey: 'teamId', targetKey: 'id', as: 'teamFundCollectData' })
            FundCollect.hasMany(models.FundCollectDetail, { foreignKey: 'fundCollectId', as: 'fundCollectDetailData' })
        }
    };
    FundCollect.init({
        teamId: DataTypes.INTEGER,
        time: DataTypes.DATE,
        amount: DataTypes.INTEGER,
        total: DataTypes.INTEGER,
        description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'FundCollect',
    });
    return FundCollect;
};