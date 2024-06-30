'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('FundCollectDetails', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fundCollectId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'FundCollects',
                    key: 'id'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            playerId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Players',
                    key: 'id'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            status: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('FundCollectDetails');
    }
};