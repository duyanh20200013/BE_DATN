'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'duyanh061202@gmail.com',
                password: '$2a$10$BJYVYwc.dwNkbK2sjsug/.2LotDPNSk2eXs/m0c3taR3/vjkkU9VW',
                role: 'User',
                status: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'duyanh061201@gmail.com',
                password: '$2a$10$BJYVYwc.dwNkbK2sjsug/.2LotDPNSk2eXs/m0c3taR3/vjkkU9VW',
                role: 'User',
                status: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'duyanh061203@gmail.com',
                password: '$2a$10$BJYVYwc.dwNkbK2sjsug/.2LotDPNSk2eXs/m0c3taR3/vjkkU9VW',
                role: 'User',
                status: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'duyanh061204@gmail.com',
                password: '$2a$10$BJYVYwc.dwNkbK2sjsug/.2LotDPNSk2eXs/m0c3taR3/vjkkU9VW',
                role: 'User',
                status: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'duyanh061205@gmail.com',
                password: '$2a$10$BJYVYwc.dwNkbK2sjsug/.2LotDPNSk2eXs/m0c3taR3/vjkkU9VW',
                role: 'User',
                status: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'duyanh061206@gmail.com',
                password: '$2a$10$BJYVYwc.dwNkbK2sjsug/.2LotDPNSk2eXs/m0c3taR3/vjkkU9VW',
                role: 'User',
                status: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};