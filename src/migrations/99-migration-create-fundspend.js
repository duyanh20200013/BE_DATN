'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('FundSpends', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            teamId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Teams',
                    key: 'id'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            time: {
                type: Sequelize.DATE
            },
            amount: {
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.STRING
            },
            type: {
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
        await queryInterface.dropTable('FundSpends');
    }
};