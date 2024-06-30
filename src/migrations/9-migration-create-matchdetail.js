'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('MatchDetails', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            matchId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Matches',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            time: {
                type: Sequelize.DATE
            },
            playerId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Players',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            goal: {
                type: Sequelize.INTEGER
            },
            assist: {
                type: Sequelize.INTEGER
            },
            yellowCard: {
                type: Sequelize.INTEGER
            },
            redCard: {
                type: Sequelize.INTEGER
            },
            badAttitude: {
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
        await queryInterface.dropTable('MatchDetails');
    }
};