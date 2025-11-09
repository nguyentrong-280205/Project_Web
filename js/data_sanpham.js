// ================= THỨC ĂN CHO CHÓ =================
const cho = [
  {
    id: 1,
    title: "Thức ăn cho chó lớn Pedigree",
    brand: "Pedigree",
    price: 120000,
    images: ["./img/cho_1.webp"],
    rating: 4.6,
    reviews: 24,
    sizes: ["1kg", "3kg", "10kg"],
    short: "Thức ăn giàu dinh dưỡng giúp chó phát triển khỏe mạnh và lông mượt.",
    features: [
      "Cân bằng dinh dưỡng cho chó trưởng thành",
      "Giúp tăng sức đề kháng và hệ tiêu hóa khỏe mạnh",
      "Hương vị hấp dẫn, dễ ăn"
    ],
    long: "Pedigree là thương hiệu uy tín chuyên cung cấp thực phẩm chất lượng cho chó. Với công thức cân đối giữa protein, vitamin và khoáng chất, sản phẩm hỗ trợ hệ tiêu hóa khỏe mạnh, giúp chó luôn năng động và có bộ lông óng mượt."
  },
  {
    id: 2,
    title: "Bánh thưởng Bowwowmix cho chó",
    brand: "Bowwowmix",
    price: 35000,
    images: ["./img/snack-banh-thuong-cho-cho-hon-hop-bowwowmix.jpg"],
    rating: 4.8,
    reviews: 42,
    sizes: ["100g", "200g"],
    short: "Bánh thưởng hỗn hợp giàu protein và hương vị hấp dẫn.",
    features: [
      "Bổ sung vitamin và khoáng chất",
      "Không chứa chất bảo quản độc hại",
      "Thích hợp dùng để huấn luyện chó"
    ],
    long: "Bánh thưởng Bowwowmix được làm từ nguyên liệu tự nhiên, giàu protein và hương vị hấp dẫn. Đây là món thưởng lý tưởng giúp khuyến khích hành vi tốt và tăng sự gắn kết giữa chủ và thú cưng."
  },
  {
    id: 3,
    title: "Thức ăn hỗ trợ tiêu hóa cho chó",
    brand: "Purina Pro Plan",
    price: 125000,
    images: ["./img/Thuc_an_ho_tro_tieu_hoa.jpg"],
    rating: 4.7,
    reviews: 33,
    sizes: ["1kg", "5kg"],
    short: "Giúp cân bằng hệ vi sinh đường ruột và giảm rối loạn tiêu hóa.",
    features: [
      "Chứa men tiêu hóa tự nhiên",
      "Bổ sung chất xơ hòa tan",
      "Phù hợp với chó nhạy cảm"
    ],
    long: "Purina Pro Plan hỗ trợ hệ tiêu hóa khỏe mạnh nhờ công thức chứa men tiêu hóa và chất xơ tự nhiên, giúp chó hấp thu dưỡng chất tối đa và giảm tình trạng chướng bụng, tiêu chảy."
  },
  {
    id: 4,
    title: "Pate Tươi The Pet Cho Chó Con (0.75kg)",
    brand: "The Pet",
    price: 105000,
    images: ["./img/cho_2.webp"],
    rating: 4.8,
    reviews: 29,
    sizes: ["400g", "750g"],
    short: "Công thức đặc biệt dành riêng cho chó con, dễ tiêu hóa và giàu dưỡng chất.",
    features: [
      "Giàu DHA giúp phát triển trí não",
      "Hỗ trợ hệ miễn dịch non trẻ",
      "Nguyên liệu tự nhiên, không phẩm màu"
    ],
    long: "Pate The Pet cho chó con cung cấp đầy đủ dưỡng chất cần thiết cho sự phát triển toàn diện. Công thức nhẹ nhàng, dễ tiêu hóa giúp chó con khỏe mạnh và tăng cân đều."
  },
  {
    id: 5,
    title: "Pate Absolute Holistic RawStew Cho Chó (80g)",
    brand: "Absolute Holistic",
    price: 30000,
    images: ["./img/cho_3.webp"],
    rating: 4.9,
    reviews: 37,
    sizes: ["80g", "160g"],
    short: "Pate hảo hạng với nguyên liệu tươi ngon và không chất bảo quản.",
    features: [
      "Nguyên liệu thịt thật 100%",
      "Không chứa ngũ cốc hay gluten",
      "Giữ nguyên hương vị tự nhiên"
    ],
    long: "Pate Absolute Holistic RawStew được chế biến từ thịt tươi chọn lọc, không chất bảo quản hay phẩm màu, giúp cung cấp bữa ăn tươi ngon và bổ dưỡng cho thú cưng của bạn."
  }
];

// ================= THỨC ĂN CHO MÈO =================
const meo = [
  {
    id: 1,
    title: "Thức ăn cho mèo Whiskas vị cá ngừ",
    brand: "Whiskas",
    price: 99000,
    images: ["./img/meo_1.webp"],
    rating: 4.7,
    reviews: 50,
    sizes: ["450g", "1.2kg"],
    short: "Thức ăn khô giàu protein giúp mèo phát triển khỏe mạnh.",
    features: [
      "Cung cấp vitamin và khoáng chất thiết yếu",
      "Tốt cho răng và xương",
      "Dễ tiêu hóa, thơm ngon"
    ],
    long: "Whiskas cung cấp dinh dưỡng cân bằng cho mèo mọi lứa tuổi, giúp duy trì thể trạng khỏe mạnh và bộ lông óng mượt."
  },
  {
    id: 2,
    title: "Cỏ mèo khô tự nhiên",
    brand: "PetGrass",
    price: 70000,
    images: ["./img/meo_2.webp"],
    rating: 4.5,
    reviews: 18,
    sizes: ["100g"],
    short: "Cỏ khô giúp mèo nôn lông dễ dàng và hỗ trợ tiêu hóa.",
    features: [
      "100% cỏ tự nhiên, không hóa chất",
      "Giúp giảm búi lông trong ruột",
      "Cung cấp vitamin tự nhiên"
    ],
    long: "Cỏ mèo khô PetGrass hỗ trợ quá trình tiêu hóa và thải lông tự nhiên, đồng thời cung cấp dưỡng chất có lợi cho sức khỏe đường ruột."
  },
  {
    id: 3,
    title: "Cát vệ sinh cho mèo Gạo Nở",
    brand: "Cature",
    price: 180000,
    images: ["./img/meo_3.webp"],
    rating: 4.9,
    reviews: 52,
    sizes: ["6L", "10L"],
    short: "Cát vệ sinh vón nhanh, khử mùi hiệu quả, thân thiện môi trường.",
    features: [
      "Vón cục nhanh, dễ dọn",
      "Khử mùi mạnh mẽ",
      "Không bụi, an toàn cho mèo"
    ],
    long: "Cát Gạo Nở từ sợi đậu nành tự nhiên, giúp khử mùi và thấm hút tối đa. Không bụi, an toàn cho cả mèo và chủ nuôi."
  },
  {
    id: 4,
    title: "Vitamin tổng hợp cho mèo",
    brand: "GimCat",
    price: 450000,
    images: ["./img/meo_4.webp"],
    rating: 4.6,
    reviews: 27,
    sizes: ["50ml", "100ml"],
    short: "Bổ sung vitamin và khoáng chất cho mèo khỏe mạnh, tăng sức đề kháng.",
    features: [
      "Tăng cường hệ miễn dịch",
      "Cải thiện da và lông",
      "Dễ hấp thu, vị thơm ngon"
    ],
    long: "GimCat Multi-Vitamin giúp mèo hấp thụ dưỡng chất cần thiết để duy trì sức khỏe toàn diện. Dạng gel dễ cho ăn, phù hợp cho mèo mọi lứa tuổi."
  }
];

// ================= GIƯỜNG - NỆM =================
const giuongnem = [
  {
    id: 1,
    title: "Võng Giường Gỗ Vuông Cho Chó Mèo",
    brand: "PetWood",
    price: 300000,
    images: ["./img/g_1.webp"],
    rating: 4.7,
    reviews: 22,
    sizes: ["S", "M", "L"],
    short: "Giường gỗ cao cấp, chắc chắn và thoáng khí.",
    features: [
      "Khung gỗ tự nhiên bền đẹp",
      "Dễ tháo lắp, vệ sinh",
      "Thích hợp cho chó mèo nhỏ và vừa"
    ],
    long: "Giường gỗ PetWood được thiết kế tinh tế, khung gỗ bền chắc giúp thú cưng ngủ ngon và thoáng mát. Dễ dàng lắp ráp và vệ sinh."
  },
  {
    id: 2,
    title: "Võng Rời Thay Thế Cho Chó Mèo",
    brand: "PetCare",
    price: 120000,
    images: ["./img/v_1.webp"],
    rating: 4.5,
    reviews: 15,
    sizes: ["M", "L"],
    short: "Võng rời thay thế tiện lợi, thoáng khí và mềm mại.",
    features: [
      "Chất liệu vải cotton cao cấp",
      "Thoáng khí, nhanh khô",
      "Dễ gấp gọn, mang đi du lịch"
    ],
    long: "Võng PetCare là phụ kiện thay thế hoàn hảo cho giường treo thú cưng. Thiết kế gọn nhẹ, dễ tháo giặt và phù hợp với mọi loại chuồng."
  },
  {
    id: 3,
    title: "Giường tầng Cho Chó Mèo",
    brand: "PetDream",
    price: 220000,
    images: ["./img/g_2.webp"],
    rating: 4.8,
    reviews: 28,
    sizes: ["M", "L"],
    short: "Giường tầng hai lớp tiện lợi cho nhiều thú cưng cùng lúc.",
    features: [
      "Thiết kế hai tầng chắc chắn",
      "Tối ưu không gian",
      "Dễ tháo rời và vệ sinh"
    ],
    long: "Giường tầng PetDream là giải pháp thông minh cho gia đình nuôi nhiều thú cưng. Cấu trúc chắc chắn, thoải mái và tiết kiệm diện tích."
  },
  {
    id: 4,
    title: "Nệm ngủ tròn lông nhung cho mèo",
    brand: "CozyCat",
    price: 250000,
    images: ["./img/nem-ngu-cho-meo2.jpg"],
    rating: 4.9,
    reviews: 48,
    sizes: ["40cm", "50cm", "60cm"],
    short: "Nệm tròn ấm áp, thiết kế ôm sát, giúp mèo ngủ ngon.",
    features: [
      "Lông nhung siêu mềm, không rụng",
      "Đáy chống trượt, an toàn",
      "Có thể giặt máy"
    ],
    long: "Nệm CozyCat được thiết kế hình tròn ôm sát cơ thể mèo, mang lại cảm giác an toàn như trong vòng tay mẹ. Chất liệu cao cấp, dễ vệ sinh, phù hợp mọi mùa."
  },
  {
    id: 5,
    title: "Balo vận chuyển phi hành gia cho mèo & chó nhỏ",
    brand: "PetAstronaut",
    price: 320000,
    images: ["./img/balo-cho-meo.jpg"],
    rating: 4.7,
    reviews: 61,
    sizes: ["Size M (≤5kg)", "Size L (≤8kg)"],
    short: "Balo trong suốt thoáng khí, an toàn khi di chuyển.",
    features: [
      "Mặt kính trong suốt, chống cào",
      "Lỗ thông khí 9 điểm",
      "Dây đeo chắc chắn, giảm áp lực vai"
    ],
    long: "Balo phi hành gia PetAstronaut giúp thú cưng thoải mái quan sát bên ngoài mà không bị stress. Thiết kế thông minh, chịu lực tốt, phù hợp đi khám, du lịch."
  }
];

// ================= VẬT DỤNG KHÁC =================
const vatdung = [
  {
    id: 1,
    title: "Cần Câu Mèo Đính Chuông Lông Vũ",
    brand: "CatFun",
    price: 60000,
    images: ["./img/dc_1.webp"],
    rating: 4.8,
    reviews: 51,
    sizes: ["30cm", "50cm"],
    short: "Đồ chơi giúp mèo vận động, săn mồi và giảm stress.",
    features: [
      "Lông vũ mềm tự nhiên",
      "Tay cầm chắc chắn",
      "Chuông phát tiếng vui tai"
    ],
    long: "Cần câu mèo CatFun giúp mèo rèn luyện phản xạ và tăng cường vận động. Thiết kế an toàn, chất liệu bền, phù hợp cho mọi lứa tuổi mèo."
  },
  {
    id: 2,
    title: "Bàn Cào Móng Giấy Cho Mèo + Tặng Cỏ Mèo",
    brand: "PetScratcher",
    price: 90000,
    images: ["./img/dc_2.webp"],
    rating: 4.7,
    reviews: 46,
    sizes: ["40x25cm", "50x30cm"],
    short: "Giúp mèo mài móng, tránh cào đồ đạc, kèm gói cỏ mèo.",
    features: [
      "Chất liệu giấy ép bền chắc",
      "Tặng kèm gói catnip thu hút mèo",
      "Thân thiện với môi trường"
    ],
    long: "Bàn cào PetScratcher giúp bảo vệ nội thất và tạo môi trường vui chơi lành mạnh cho mèo. Dễ thay thế và tái chế."
  },
  {
    id: 3,
    title: "Cây Lăn Mát Xa Cho Mèo CattyMan",
    brand: "CattyMan",
    price: 110000,
    images: ["./img/dc_3.webp"],
    rating: 4.8,
    reviews: 39,
    sizes: ["Nhỏ", "Vừa"],
    short: "Giúp mèo thư giãn, mát xa cơ thể sau khi vận động.",
    features: [
      "Thiết kế cong ôm thân mèo",
      "Nhựa ABS an toàn",
      "Tăng cường lưu thông máu"
    ],
    long: "Cây lăn CattyMan là sản phẩm mát xa lý tưởng giúp mèo thư giãn, giảm căng thẳng và kích thích tuần hoàn máu tự nhiên."
  },
  {
    id: 4,
    title: "Đồ chơi thú bông cho chó",
    brand: "PetJoy",
    price: 75000,
    images: ["./img/dc_4.jpg"],
    rating: 4.5,
    reviews: 33,
    sizes: ["S", "M"],
    short: "Đồ chơi mềm giúp chó cắn gặm an toàn, giải trí hiệu quả.",
    features: [
      "Chất liệu vải bông cao cấp",
      "Không độc hại, dễ giặt",
      "Giúp giảm stress cho chó"
    ],
    long: "Thú bông PetJoy là người bạn thân thiết của chó cưng, giúp chúng vui chơi và giảm cảm giác cô đơn khi ở một mình."
  },
  {
    id: 5,
    title: "Áo len ấm áp cho chó nhỏ",
    brand: "PetKnit",
    price: 150000,
    images: ["./img/ao-len-cho-cho-nho.jpg"],
    rating: 4.6,
    reviews: 27,
    sizes: ["XXS", "XS", "S"],
    short: "Áo len thủ công, giữ ấm mùa đông, dễ mặc.",
    features: [
      "Len cotton mềm mại",
      "Thiết kế ôm vừa, không bí",
      "Có lỗ xỏ dây dắt"
    ],
    long: "Áo len PetKnit giúp chó nhỏ giữ ấm trong mùa đông lạnh. Thiết kế dễ mặc, không gây khó chịu, phù hợp dạo chơi hoặc ở nhà."
  },
  {
    id: 6,
    title: "Vòng cổ phát sáng LED cho chó mèo",
    brand: "SafeNight",
    price: 95000,
    images: ["./img/vongco.webp"],
    rating: 4.7,
    reviews: 41,
    sizes: ["S", "M", "L"],
    short: "Vòng cổ LED sạc USB, an toàn khi dắt đêm.",
    features: [
      "3 chế độ nháy",
      "Sạc USB, dùng 8h/lần sạc",
      "Chống nước nhẹ"
    ],
    long: "Vòng cổ SafeNight giúp bạn dễ dàng nhìn thấy thú cưng trong bóng tối. An toàn khi dắt đêm, đi camping hoặc chạy bộ."
  },
  {
    id: 7,
    title: "Khay ăn đôi inox chống kiến cho mèo",
    brand: "PetBowl",
    price: 85000,
    images: ["./img/khay_an.jpg"],
    rating: 4.6,
    reviews: 38,
    sizes: ["Nhỏ", "Lớn"],
    short: "Khay đôi inox + chân đế chống kiến, dễ vệ sinh.",
    features: [
      "Inox 304 không gỉ",
      "Chân cao su chống trượt",
      "Rãnh chống kiến hiệu quả"
    ],
    long: "Khay ăn PetBowl giúp thức ăn luôn sạch sẽ, không bị kiến bò. Dễ tháo rửa, bền theo thời gian."
  },
  {
    id: 8,
    title: "Bóng bay tự động cho chó mèo",
    brand: "SmartPet",
    price: 180000,
    images: ["./img/do_choi_cho_cho.webp"],
    rating: 4.9,
    reviews: 45,
    sizes: ["Únic"],
    short: "Bóng tự động lăn, phát sáng, kích thích vận động.",
    features: [
      "Cảm biến chuyển động",
      "Pin sạc, dùng 4h/lần",
      "Chống nước, bền va đập"
    ],
    long: "Bóng thông minh SmartPet giúp thú cưng vận động ngay cả khi bạn vắng nhà. Tự động lăn, đổi hướng khi va chạm."
  },
  {
    id: 9,
    title: "Dung dịch vệ sinh tai cho chó mèo",
    brand: "EarClean",
    price: 45000,
    images: ["./img/vs_tai_TC.jpg"],
    rating: 4.5,
    reviews: 30,
    sizes: ["60ml", "120ml"],
    short: "Làm sạch ráy tai, khử mùi, ngừa viêm.",
    features: [
      "Chiết xuất tự nhiên, không cồn",
      "Dễ nhỏ, không gây đau",
      "Hương bạc hà nhẹ"
    ],
    long: "EarClean giúp làm sạch tai an toàn, ngăn ngừa viêm tai và mùi hôi. Dùng 1-2 lần/tuần để tai luôn khỏe mạnh."
  },
  {
    id: 10,
    title: "Đồ chơi nước phun tự động cho mèo",
    brand: "WaterFun",
    price: 99000,
    images: ["./img/dochoi.webp"],
    rating: 4.8,
    reviews: 42,
    sizes: ["Únic"],
    short: "Đài phun nước khuyến khích mèo uống nhiều hơn.",
    features: [
      "Lọc than hoạt tính 3 lớp",
      "Chạy êm, không ồn",
      "Tự động tắt khi hết nước"
    ],
    long: "WaterFun kích thích mèo uống nước, phòng ngừa sỏi thận. Nước luôn tươi sạch nhờ hệ thống lọc tuần hoàn."
  },
  {
    id: 11,
    title: "Đèn LED cảm biến cho chuồng thú cưng",
    brand: "PetLight",
    price: 75000,
    images: ["./img/den.jpg"],
    rating: 4.6,
    reviews: 25,
    sizes: ["Únic"],
    short: "Đèn tự sáng khi trời tối, tiết kiệm pin.",
    features: [
      "Cảm biến ánh sáng + chuyển động",
      "Pin sạc, dùng 3 tháng/lần",
      "Góc sáng rộng 120°"
    ],
    long: "Đèn PetLight tự động bật khi trời tối hoặc có chuyển động, giúp bạn quan sát thú cưng dễ dàng vào ban đêm."
  },
  {
    id: 12,
    title: "Bàn chải massage lông cao su cho chó mèo",
    brand: "SoftBrush",
    price: 120000,
    images: ["./img/bannchai.jpg"],
    rating: 4.7,
    reviews: 37,
    sizes: ["Nhỏ", "Lớn"],
    short: "Bàn chải massage, gom lông hiệu quả, không đau.",
    features: [
      "Gai cao su mềm, massage da",
      "Nút bấm đẩy lông ra dễ dàng",
      "Dùng được khi tắm"
    ],
    long: "Bàn chải SoftBrush giúp gom lông rụng nhanh chóng, massage da đầu, kích thích tuần hoàn máu."
  },
  {
    id: 13,
    title: "Túi đựng quần áo & phụ kiện thú cưng",
    brand: "PetBag",
    price: 180000,
    images: ["./img/quanao.jpg"],
    rating: 4.5,
    reviews: 22,
    sizes: ["Size M", "Size L"],
    short: "Túi đa ngăn, chống thấm, dễ mang theo.",
    features: [
      "Vải Oxford chống nước",
      "Nhiều ngăn đựng đồ",
      "Quai đeo chéo tiện lợi"
    ],
    long: "Túi PetBag giúp bạn mang theo quần áo, đồ chơi, thức ăn khi đi chơi hoặc khám bác sĩ."
  },
  {
    id: 14,
    title: "Giày bảo vệ chân cho chó (bộ 4 cái)",
    brand: "PetShoes",
    price: 95000,
    images: ["./img/giay.webp"],
    rating: 4.6,
    reviews: 33,
    sizes: ["#1", "#2", "#3", "#4", "#5"],
    short: "Giày chống trượt, bảo vệ chân khi đi đường nóng/lạnh.",
    features: [
      "Đế cao su chống trượt",
      "Dây dán điều chỉnh vừa chân",
      "Chống nước, dễ lau chùi"
    ],
    long: "Giày PetShoes bảo vệ bàn chân chó khỏi mặt đường nóng, đá sỏi, hóa chất. Thoáng khí, dễ mang."
  },
  {
    id: 15,
    title: "Cỏ khô Timothy cao cấp cho thỏ, chuột lang",
    brand: "HayPet",
    price: 60000,
    images: ["./img/co.jpg"],
    rating: 4.8,
    reviews: 28,
    sizes: ["500g", "1kg"],
    short: "Cỏ Timothy giàu chất xơ, tốt cho hệ tiêu hóa thỏ.",
    features: [
      "Cắt đợt 1, giàu dinh dưỡng",
      "Không thuốc, phơi khô tự nhiên",
      "Hỗ trợ mài răng"
    ],
    long: "Cỏ Timothy HayPet là thức ăn chính cho thỏ, giúp mài răng và tiêu hóa khỏe mạnh. Bảo quản nơi khô ráo, dùng dần trong 6 tháng."
  },
  {
    id: 16,
    title: "Lót chống tràn nước/thức ăn cho thú cưng",
    brand: "PetMat",
    price: 45000,
    images: ["./img/lot.jpg"],
    rating: 4.7,
    reviews: 35,
    sizes: ["40x60cm", "60x90cm"],
    short: "Tấm lót silicone chống thấm, dễ lau chùi.",
    features: [
      "Chống tràn, chống mùi",
      "Gấp gọn, dễ cất",
      "An toàn thực phẩm"
    ],
    long: "Tấm lót PetMat giúp khu vực ăn uống luôn sạch sẽ. Chất liệu silicone cao cấp, không bám mùi, dễ vệ sinh hàng ngày."
  }
];

// Gắn vào window
window.cho = cho;
window.meo = meo;
window.giuongnem = giuongnem;
window.vatdung = vatdung;