'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Players', [
            {
                name: 'Duy Anh',
                number: 1,
                teamId: 1,
                phone: '0867954826',
                isCaptain: 1,
                position: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Duy Anh2',
                number: 2,
                teamId: 1,
                phone: null,
                isCaptain: 0,
                position: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Duy Anh3',
                number: 3,
                teamId: 1,
                phone: '0867954823',
                isCaptain: 0,
                position: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Admin',
                number: 4,
                teamId: 5,
                phone: '0867954826',
                isCaptain: 1,
                position: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'MinhPN',
                number: 2,
                teamId: 5,
                phone: '0984612345',
                isCaptain: 0,
                position: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            }

        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Players', null, {});
    }
};