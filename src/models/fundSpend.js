'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FundSpend extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            FundSpend.belongsTo(models.Team, { foreignKey: 'teamId', targetKey: 'id', as: 'teamFundSpendData' })
        }
    };
    FundSpend.init({
        teamId: DataTypes.INTEGER,
        time: DataTypes.DATE,
        amount: DataTypes.INTEGER,
        description: DataTypes.STRING,
        type: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'FundSpend',
    });
    return FundSpend;
};