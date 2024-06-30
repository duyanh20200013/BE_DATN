'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Teams', [
            {
                id: 1,
                name: 'Team Admin',
                balance: 0,
                phone: '0867954826',
                image: 'https://firebasestorage.googleapis.com/v0/b/test-289b9.appspot.com/o/rn_image_picker_lib_temp_82bfb77c-426d-42e3-83d8-d55785f0d11a.jpg?alt=media&token=0f8ccfe1-35c1-41b4-9a17-83054b0355c8',
                description: '8h tối T2 sân Đại Từ',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                name: 'FC 123',
                balance: 0,
                phone: '0364289822',
                image: null,
                description: 'Đội trung bình yếu',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                name: 'Team 12b7',
                balance: 0,
                phone: '0984612678',
                image: 'https://firebasestorage.googleapis.com/v0/b/test-289b9.appspot.com/o/rn_image_picker_lib_temp_65e27c37-bdb6-4f02-9335-f911b6575951.jpg?alt=media&token=90771f96-6bf7-42c7-92c1-edb2977b8088',
                description: '2h T7 hàng tuần sân Vĩnh Hoàng',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 4,
                name: 'Đầu bếp',
                balance: 0,
                phone: '0367299826',
                image: 'https://firebasestorage.googleapis.com/v0/b/test-289b9.appspot.com/o/rn_image_picker_lib_temp_fdac61a1-d42b-4a30-bf1c-d1f9261ee601.jpg?alt=media&token=7fdf4932-e84a-491a-896c-9ddd1f11d50e',
                description: '8h tối T5 sân Bách Khoa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 5,
                name: 'Đội Demo23',
                balance: 0,
                phone: '0984623690',
                image: 'https://firebasestorage.googleapis.com/v0/b/test-289b9.appspot.com/o/rn_image_picker_lib_temp_807801c3-1f46-458f-8921-0dcb0126579a.jpg?alt=media&token=f31629df-9cb1-4f1f-b669-afde908681f8',
                description: 'Cần tìm đối trung bình yếu',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 6,
                name: 'FC Anh Em',
                balance: 0,
                phone: '0975324567',
                image: 'https://firebasestorage.googleapis.com/v0/b/test-289b9.appspot.com/o/rn_image_picker_lib_temp_e5c5db96-facb-4d1f-af6d-7e53ac991bba.jpg?alt=media&token=b6d098b0-8781-430e-a82e-7f227a079a93',
                description: 'Đối mềm',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Teams', null, {});
    }
};