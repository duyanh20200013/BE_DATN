'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Stadia', [
            {
                district: "Quận Thanh Xuân",
                name: "Sân bóng Top Group",
                address: "Ngã 3 gần mặt đường Lê Văn Lương, Khuất Duy Tiến, Thanh Xuân, Hà Nội",
                phone: "0856891616",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Thanh Xuân",
                name: "Sân bóng nhân tạo Phòng không – Không quân",
                address: "Số 3, Lê Trọng Tấn, Khương Mai, Thanh Xuân, Hà Nội",
                phone: "0858658899",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Thanh Xuân",
                name: "Sân bóng Viettel 1",
                address: "Ngách 155/206 đường Trường Chinh, Phương Liệt, Thanh Xuân, Hà Nội",
                phone: "0858658899",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Thanh Xuân",
                name: "Sân bóng Minh Kiệt",
                address: "Đường Hoàng Minh Giám, quận Thanh Xuân",
                phone: "0978102022",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Thanh Xuân",
                name: "Sân bóng Khương Hạ",
                address: "Phố Khương Hạ, Phường Khương Đình, Thanh Xuân, Hà Nội",
                phone: "0987866389",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Thanh Xuân",
                name: "Sân bóng Bộ Công An",
                address: "369 Cầu Dậu, Nguyễn Xiển, Hạ Đình, Thanh Xuân",
                phone: "0858885555",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Thanh Xuân",
                name: "Sân bóng Thượng Đình",
                address: "129 Nguyễn Trãi, Phường Thượng Đình, Thanh Xuân, Hà Nội",
                phone: "0842347826",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Thanh Xuân",
                name: "Sân nhân tạo nhà văn hóa Thanh Xuân",
                address: "186 Khuất Duy Tiến, Thanh Xuân, Hà Nội",
                phone: "0866255526",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Thanh Xuân",
                name: "Sân bóng Sơn Trang 2",
                address: "Số 1, Hoàng Minh Giám, Thanh Xuân, Hà Nộ",
                phone: "0988005065",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Thanh Xuân",
                name: "Sân bóng VSA2",
                address: "5D, Lê Trọng Tấn, Khương Mai, Thanh Xuân",
                phone: "0977641696",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Thanh Xuân",
                name: "Sân bóng Tháng Giêng",
                address: "Số 25 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội",
                phone: "0904713268",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Thanh Xuân",
                name: "Sân bóng Giáp Nhất",
                address: "Ngõ 72 đường Nguyễn Trãi, Nhân Chính, Thanh Xuân, Hà Nội",
                phone: "0882454115",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Nam Từ Liêm",
                name: "Sân bóng CT6-THE GARDEN",
                address: "CT6 khu đô thị Mỹ Đình, quận Nam Từ Liêm, Hà Nội",
                phone: "0949135909",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Nam Từ Liêm",
                name: "Sân bóng Mễ Trì Thượng",
                address: "Châu Văn Liêm, Mễ Trì, quận Nam Từ Liêm, Hà Nội",
                phone: "0986528891",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Nam Từ Liêm",
                name: "Sân bóng đá Cổ Nhuế 2",
                address: "Đường Tăng Thiết Giáp, Cổ Nhuế, quận Nam Từ Liêm, Hà Nội",
                phone: "0982493311",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Nam Từ Liêm",
                name: "Sân bóng đá Mỹ Đình 2",
                address: "P2, Lê Quang Đạo, Mỹ Đình, quận Nam Từ Liêm, Hà Nội",
                phone: "0966116365",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Nam Từ Liêm",
                name: "Sân bóng Nhân Mỹ",
                address: "Làng Nhân Mỹ, quận Nam Từ Liêm, Hà Nội",
                phone: "0904141089",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Nam Từ Liêm",
                name: "Sân bóng MIC Lương Thế Vinh",
                address: "379A Lương Thế Vinh, Trung Văn, quận Nam Từ Liêm, Hà Nội",
                phone: "0975764173",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Nam Từ Liêm",
                name: "Sân bóng Mirolin Sport Club",
                address: "Lê Đức Thọ, đối diện sân vận động Mỹ Đình, Nam Từ Liêm, Hà Nội",
                phone: "0949135909",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Nam Từ Liêm",
                name: "Sân bóng Thành Lâm VTC",
                address: "108 Mỹ Đình, Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội",
                phone: "0985736869",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Nam Từ Liêm",
                name: "Sân bóng Lê Văn Lương",
                address: "88 Lê Văn Lương, Trung Văn, quận Nam Từ Liêm, Hà Nội",
                phone: "09163114980",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Bắc Từ Liêm",
                name: "Sân bóng Ngọa Long, Minh Khai",
                address: "Ngõ 136 Cầu Diễn, Minh Khai, quận Bắc Từ Liêm, Hà Nội",
                phone: "0858658899",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Bắc Từ Liêm",
                name: "Sân bóng Liên Mạc",
                address: "CT6 khu đô thị Mỹ Đình, quận Nam Từ Liêm, Hà Nội",
                phone: "0858658899",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hai Bà Trưng",
                name: "Sân bóng KTX ĐH Bách Khoa",
                address: "34 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội",
                phone: "0438680186",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hai Bà Trưng",
                name: "Sân bóng công viên Tuổi trẻ",
                address: "Số 46, Thanh Nhàn, quận Hai Bà Trưng, Hà Nội",
                phone: "0858658899",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hai Bà Trưng",
                name: "Sân bóng trường ĐH Bách Khoa",
                address: "A1 Lê Thanh Nghị, Bách Khoa, quận Hai Bà Trưng, Hà Nội",
                phone: "0438680186",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hai Bà Trưng",
                name: "Sân bóng Vĩnh Tuy 30",
                address: "Ngõ 122 Vĩnh Tuy, quận Hai Bà Trưng, Hà Nội",
                phone: "0833439999",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hai Bà Trưng",
                name: "Sân bóng Thanh Nhàn",
                address: "Đối diện 187 Thanh Nhàn, Hai Bà Trưng, Hà Nội",
                phone: "0438680186",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hai Bà Trưng",
                name: "Sân bóng Hai Bà Trưng",
                address: "Ngõ 104 Nguyễn An Ninh, quận Hai Bà Trưng, Hà Nội",
                phone: "0964434433",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hai Bà Trưng",
                name: "Sân bóng SportLand Vĩnh Tuy",
                address: "Số 25, ngõ 122 Vĩnh Tuy, quận Hai Bà Trưng, Hà Nội",
                phone: "0438680186",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hai Bà Trưng",
                name: "Sân bóng Minh Kiệt",
                address: "44 Đại La, Đồng Tâm, quận Hai Bà Trưng, Hà Nội",
                phone: "0438680186",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàng Mai",
                name: "Sân bóng Định Công",
                address: "Ngõ 99 Định Công Hạ, Định Công, Hoàng Mai, Hà Nội",
                phone: "0855155885",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàng Mai",
                name: "Sân bóng đá Bộ Công An",
                address: "Số 1, ngõ 299 Hoàng Mai, Mai Động, Hoàng Mai, Hà Nội",
                phone: "0835891878",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàng Mai",
                name: "Sân bóng BKC Sport",
                address: "58 Linh Đường, Hoàng Liệt, Hoàng Mai, Hà Nội",
                phone: "0833878555",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàng Mai",
                name: "Sân bóng Lĩnh Nam",
                address: "74 Thúy Lĩnh, Lĩnh Nam, quận Hoàng Mai, Hà Nội",
                phone: "0942572666",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàng Mai",
                name: "Sân bóng Hồ Đền Lừ",
                address: "Ngã 3 Đền Lừ, Tân Mai, quận Hoàng Mai, Hà Nội",
                phone: "0856777779",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàng Mai",
                name: "Sân bóng Linh Đàm",
                address: "Ngõ 32 Linh Đường, Thịnh Liệt, Hoàng Mai, Hà Nội",
                phone: "0903429669",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàng Mai",
                name: "Sân bóng Đại Từ",
                address: "Đặng Xuân Bảng, Đại Kim, Hoàng Mai, Hà Nội",
                phone: "0987652589",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàng Mai",
                name: "Sân bóng 226 Vĩnh Hưng",
                address: "226 Vĩnh Hưng, Hoàng Mai, Hà Nội",
                phone: "0945148867",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàng Mai",
                name: "Sân bóng quân đội Hoàng Mai",
                address: "Số 1, ngõ 299 Hoàng Mai, Mai Động, Hà Nội",
                phone: "0908628555",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàng Mai",
                name: "Sân bóng Pháp Vân",
                address: "Khu đô thị Pháp Vân, Giáp Bát, Hoàng Mai, Hà Nội",
                phone: "0333457274",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàng Mai",
                name: "Sân bóng Tân Mai",
                address: "250 Tân Mai, Hoàng Mai, Hà Nội",
                phone: "0914626883",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Ba Đình",
                name: "Sân bóng đá Viglacera Hoàng Hoa Thám",
                address: "Số 671, Hoàng Hoa Thám, quận Ba Đình, Hà Nội",
                phone: "0904646025",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Ba Đình",
                name: "Sân bóng đá 10-10",
                address: "Trần Huy Liệu, quận Ba Đình, Hà Nội",
                phone: "0858658899",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Ba Đình",
                name: "Sân bóng đá Vạn Phúc",
                address: "Số 73, Vạn Bảo, quận Ba Đình, Hà Nội",
                phone: "0438462737",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Ba Đình",
                name: "Sân bóng đá Phúc Xá 1",
                address: "Tân Ấp, Phúc Xá, quận Ba Đình, Hà Nội",
                phone: "0439185111",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Ba Đình",
                name: "Sân bóng đá Phúc Xá 2",
                address: "15 Hồng Hà, Phúc Xá, quận Ba Đình, Hà Nội",
                phone: "0437170697",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Ba Đình",
                name: "Sân bóng Phạm Hồng Thái",
                address: "Số 1 Phạm Văn Ngọc, Ba Đình, Hà Nội",
                phone: "0904646025",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Ba Đình",
                name: "Sân bóng Hồng Hà",
                address: "Đường Hồng Hà, Phúc Xá, quận Ba Đình, Hà Nội",
                phone: "0942418158",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Ba Đình",
                name: "Sân bóng Quần Ngựa",
                address: "Văn Cao, phường Ngọc Hà, Ba Đình, Hà Nội",
                phone: "0936356393",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Ba Đình",
                name: "Sân bóng Đại Việt",
                address: "24 Nguyễn Công Hoan, quận Ba Đình, Hà Nội",
                phone: "0944199376",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Cụm sân cỏ nhân tạo trường Cao đẳng Múa Hà Nội",
                address: "Hồ Tùng Mậu, Mai Dịch, quận Cầu Giấy, Hà Nội",
                phone: "0985136869",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Sân bóng cỏ nhân tạo chân cầu vượt Mai Dịch",
                address: "Số 1 Phạm Hùng, quận Cầu Giấy, Hà Nội",
                phone: "0985531619",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Sân bóng đá Thiên Trường",
                address: "Đường Hoàng Minh Giám, Trung Hòa, quận Cầu Giấy, Hà Nội",
                phone: "0946795885",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Sân bóng cỏ nhân tạo PVV liên hợp thể thao",
                address: "22 Trần Thái Tông, quận Cầu Giấy, Hà Nội",
                phone: "0905731986",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Sân bóng Yên Hòa 2",
                address: "Nguyễn Phong Sắc, quận Cầu Giấy, Hà Nội",
                phone: "0372438600",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Sân bóng quân đội 125 Hoàng Ngân",
                address: "125 Hoàng Ngân, Trung Hòa, Cầu Giấy, Hà Nội",
                phone: "0858658899",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Sân bóng Học viện báo chí và tuyên truyền",
                address: "Số 36 Xuân Thủy, quận Cầu Giấy, Hà Nội",
                phone: "0437546963",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Sân bóng cỏ nhân tạo Đông Đô",
                address: "Cổng công viên Cầu Giấy, Dịch Vọng Hậu, quận Cầu Giấy, Hà Nội",
                phone: "0986676116",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Sân bóng mini Trung Kính Hạ",
                address: "Số 6 Nguyễn Chánh, Trung Hòa, quận Cầu Giấy, Hà Nội",
                phone: "0915144060",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Sân bóng Thành Đồng",
                address: "Nam Trung Yên, Trung Hòa, quận Cầu Giấy, Hà Nội",
                phone: "0945697597",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Sân bóng ĐH Sư phạm Hà Nội",
                address: "136 Xuân Thủy, Dịch Vọng Hậu, quận Cầu Giấy, Hà Nội",
                phone: "0858658899",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Cầu Giấy",
                name: "Sân bóng cỏ nhân tạo E9 Phạm Hùng",
                address: "Gần Big C, Cầu Giấy, Hà Nội",
                phone: "0987884994",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Tây Hồ",
                name: "Sân bóng cỏ nhân tạo Xuân La",
                address: "101 Xuân La, Tây Hồ, Hà Nội",
                phone: "0913210774",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Tây Hồ",
                name: "Sân bóng An Dương",
                address: "Ngõ 76 An Dương, Yên Phụ, Tây Hồ, Hà Nội",
                phone: "0984380888",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Tây Hồ",
                name: "Sân bóng cỏ nhân tạo Quảng An",
                address: "Số 6, Đặng Thai Mai, Quảng An, quận Tây Hồ, Hà Nội",
                phone: "0858658899",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Tây Hồ",
                name: "Sân cỏ nhân tạo trường Chu Văn An",
                address: "Số 10 Thụy Khuê, quận Tây Hồ, Hà Nội",
                phone: "0438233139",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Tây Hồ",
                name: "Sân bóng nhân tạo Bầu trời xanh Công viên nước Hồ Tây",
                address: "Công viên nước Hồ Tây, Quảng An, Tây Hồ, Hà Nội",
                phone: "0966601545",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Tây Hồ",
                name: "Sân bóng La Thành",
                address: "Số 81, Võ Chí Công, Xuân La, Tây Hồ, Hà Nội",
                phone: "0858658899",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàn Kiếm",
                name: "Số 46-Hàng Trống-Hoàn Kiếm",
                address: "Số 81, Võ Chí Công, Xuân La, Tây Hồ, Hà Nội",
                phone: "0969509630",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàn Kiếm",
                name: "Sân bóng Bạch Đằng",
                address: "Số 553-Hoàn Kiếm",
                phone: "0919096498",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hoàn Kiếm",
                name: "Sân bóng trung tâm TDTT Hoàn Kiếm",
                address: "Trung tâm thể dục TT Quận Hoàn Kiếm – Khu thể thao Đa Năng – Số 223 Hồng Bàng – Phúc Tân – Hoàn Kiếm",
                phone: "0969016473",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Đống Đa",
                name: "Sân bóng Đại học Y",
                address: "Số 1 đường Tôn Thất Tùng, Đống Đa, Hà Nội",
                phone: "0933876822",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Đống Đa",
                name: "Sân bóng nhân tạo ĐH Thủy Lợi",
                address: "Ngõ 95 phố Chùa Bộc, Trung Liệt, Đống Đa, Hà Nội",
                phone: "0976299980",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Đống Đa",
                name: "Sân bóng Kim Liên",
                address: "Số 15 Hoàng Tích Trí, Đống Đa, Hà Nội",
                phone: "0904136138",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Đống Đa",
                name: "Sân bóng Artex Thăng Long",
                address: "Số 60, Thịnh Hào 1, Tôn Đức Thắng, Đống Đa, Hà Nội",
                phone: "0942237335",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Đống Đa",
                name: "Sân bóng ĐH Công Đoàn",
                address: "167 Tây Sơn, Đống Đa, Hà Nội",
                phone: "0979912791",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Đống Đa",
                name: "Sân bóng ĐH Ngoại Thương",
                address: "157 chùa Láng, Láng Thượng, Đống Đa, Hà Nội",
                phone: "0912234567",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Đống Đa",
                name: "Sân bóng 69 Hoàng Cầu",
                address: "Số 69 Hoàng Cầu, Chợ Dừa, Đống Đa, Hà Nội",
                phone: "0985296589",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Đống Đa",
                name: "Sân bóng Chùa Láng",
                address: "112 chùa Láng, Láng Thượng, Đống Đa, Hà Nội",
                phone: "0961629889",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Đống Đa",
                name: "Sân bóng ĐH Ngân Hàng",
                address: "Số 12 Chùa Bộc, quận Đống Đa, Hà Nội",
                phone: "0978987737",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Đống Đa",
                name: "Sân bóng nhân tạo Phòng không – Không quân 1",
                address: "Số 1 Trường Chinh, Đống Đa, Hà Nội",
                phone: "0989836795",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Long Biên",
                name: "Sân bóng đá Đường sắt Long Biên",
                address: "số 2 – Ngõ 167 – Gia Quất -Long Biên – Hà Nội",
                phone: "0989836795",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Long Biên",
                name: "Sân bóng Long Biên",
                address: "1 Phúc Tân – 301 Hồng Hà – Long Biên – Hà Nội",
                phone: "0969799235",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Long Biên",
                name: "Sân bóng ven đê 1",
                address: "138 Phú Viên – Long Biên – Hà Nội",
                phone: "0328875038",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Long Biên",
                name: "Sân bóng ven đê 2 ",
                address: "302 Phú Viên – Long Biên – Hà Nội",
                phone: "0944341979",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Long Biên",
                name: "Sân bóng Ngọc Thuỵ",
                address: "Ngách 268/21 – Gia Thượng – Ngọc Thụy – Long Biên – Hà Nội",
                phone: "0912434538",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Long Biên",
                name: "Sân bóng Nguyễn Sơn",
                address: "360 Nguyễn Văn Cừ, Phường Gia Thụy, Quận Long Biên, Hà Nội",
                phone: "0989836795",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Long Biên",
                name: "Sân bóng Vinhome Riverside",
                address: "Khu Đô Thị Vinhome Riverside, Quận Long Biên, Hà Nội",
                phone: "0969089999",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Long Biên",
                name: "Sân bóng Chương Dương",
                address: "Bồ Đề, Long Biên, Hà Nội",
                phone: "0988169439",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Long Biên",
                name: "Sân Bóng Ái Mộ",
                address: "99 Ái Mộ, Ngọc Thuỵ, Long Biên , Hà Nội",
                phone: "0904397766",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Long Biên",
                name: "Sân bóng Z133",
                address: "Ngõ 99 phố Đức Giang, Khu tập thể Z133, Ngọc Thụy, Long Biên – Hà Nội",
                phone: "0858658899",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Long Biên",
                name: "Sân Bóng Garden City",
                address: "Tổ 12 Đường Thạch Bàn, Phường Thạch Bàn, Quận Long Biên, Hà Nội",
                phone: "0383694954",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hà Đông",
                name: "Sân bóng zon9",
                address: "Khu đô thị Văn Quán, Hà Đông, Hà Nội",
                phone: "0917698989",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hà Đông",
                name: "Sân bóng C500",
                address: "Học Viện An Ninh P. Văn Quán, Hà Đông, Hà Nội",
                phone: "0966886500",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hà Đông",
                name: "Sân bóng Bình Minh 2",
                address: "Khu công viên thể thao và cây xanh Hà Đông, Đường Cầu Đơ Phường Kiến Hưng, quận Hà Đông, Hà Nội",
                phone: "0366311182",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hà Đông",
                name: "Sân bóng Cầu Đơ",
                address: "46 Lê Hồng Phong, P. Nguyễn Trãi, Hà Đông, Hà Nội",
                phone: "0356525327",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hà Đông",
                name: "Sân bóng Kiến Hưng chợ 365",
                address: "Chợ 365, Hà Đông, Hà Nội",
                phone: "0814121255",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hà Đông",
                name: "Sân bóng Thắng Lợi",
                address: "NO 33-LK 07 Hà Trì,Hà Cầu,Hà Đông,Hà Nội",
                phone: "0933565589",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hà Đông",
                name: "Sân bóng Đại Học Hà Nội",
                address: "Đại Học Hà Nội, P. Văn Quán, Hà Đông, Hà Nội",
                phone: "0912094468",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hà Đông",
                name: "Sân bóng Văn Phú",
                address: "Ngõ 20 phố Vạn Phúc, Phương Phúc La, Hà Đông, Hà Nội",
                phone: "0966026286",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hà Đông",
                name: "Sân Bóng Mộ Lao",
                address: "Tổ 16 P. Mộ Lao, Hà Đông, Hà Nội",
                phone: "0963088986",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                district: "Quận Hà Đông",
                name: "Sân bóng Nguyễn Huệ",
                address: "560b Đ. Quang Trung, La Khê, Hà Đông, Hà Nội",
                phone: "0335867922",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Stadia', null, {});
    }
};