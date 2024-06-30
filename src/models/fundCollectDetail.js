'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FundCollectDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            FundCollectDetail.belongsTo(models.FundCollect, { foreignKey: 'fundCollectId', targetKey: 'id', as: 'fundCollectDetailData' })
            FundCollectDetail.belongsTo(models.Player, { foreignKey: 'playerId', targetKey: 'id', as: 'playerCollectDetailData' })
        }
    };
    FundCollectDetail.init({
        fundCollectId: DataTypes.INTEGER,
        playerId: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'FundCollectDetail',
    });
    return FundCollectDetail;
};