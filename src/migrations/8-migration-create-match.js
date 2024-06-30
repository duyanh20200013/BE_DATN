'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Matches', {
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
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            result: {
                type: Sequelize.STRING
            },
            goal: {
                type: Sequelize.INTEGER
            },
            lostGoal: {
                type: Sequelize.INTEGER
            },
            time: {
                type: Sequelize.DATE
            },
            description: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Matches');
    }
};