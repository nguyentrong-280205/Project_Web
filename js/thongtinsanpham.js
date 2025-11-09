// ================= THỨC ĂN CHO CHÓ =================
const cho = [
  {
    id: 1,
    name: 'Thức ăn cho chó lớn',
    price: 120000,
    image: "./img/cho_1.webp",
    category: 'Thức ăn cho chó'
  },
  {
    id: 2,
    name: 'Bánh thưởng cho chó',
    price: 35000,
    image: "./img/snack-banh-thuong-cho-cho-hon-hop-bowwowmix.jpg",
    category: 'Thức ăn cho chó'
  },
  { 
    id: 3,
    name: 'Thức ăn hỗ trợ tiêu hóa',
    price: 125000,
    image: "./img/Thuc_an_ho_tro_tieu_hoa.jpg",
    category: 'Thức ăn cho chó'
  },
  {
    id: 4,
    name: 'Pate Tươi The Pet Cho Chó con (0.75kg)',
    price: 105000,
    image: "./img/cho_2.webp",
    category: 'Thức ăn cho chó'
  },
  {
    id: 5,
    name: 'Pate Absolute Holistic RawStew Cho Chó (Lon 80g)',
    price: 30000,
    image: "./img/cho_3.webp",
    category: 'Thức ăn cho chó'
  }
];

// ================= THỨC ĂN CHO MÈO =================
const meo = [
  {
    id: 1,
    name: 'Pate cho mèo vị cá ngừ',
    price: 110000,
    image: "./img/meo_1.webp",
    category: 'Thức ăn cho mèo'
  },
  {
    id: 2,
    name: 'Cỏ mèo khô tự nhiên',
    price: 70000,
    image: "./img/meo_2.webp",
    category: 'Thức ăn cho mèo'
  },
  {
    id: 3,
    name: 'Cát vệ sinh cho mèo',
    price: 180000,
    image: "./img/meo_3.webp",
    category: 'Thức ăn cho mèo'
  },
  {
    id: 4,
    name: 'Vitamin tổng hợp cho thú cưng',
    price: 450000,
    image: "./img/meo_4.webp",
    category: 'Thức ăn cho mèo'
  }
];

// ================= GIƯỜNG - NỆM =================
const giuongnem = [
  {
    id: 1,
    name: 'Võng Giường Gỗ Vuông Cho Chó Mèo',
    price: 300000,
    image: "./img/g_1.webp",
    category: 'Giường nệm'
  },
  {
    id: 2,
    name: 'Võng Rời Thay Thế Cho Chó Mèo',
    price: 120000,
    image: "./img/v_1.webp",
    category: 'Giường nệm'
  },
  {
    id: 3,
    name: 'Giường tầng Cho Chó Mèo',
    price: 220000,
    image: "./img/g_2.webp",
    category: 'Giường nệm'
  },
  {
    id: 4,
    name: 'Nệm ngủ mèo',
    price: 250000,
    image: "./img/nem-ngu-cho-meo2.jpg",
    category: 'Giường nệm'
  },
  {
    id: 5,
    name: 'Balo vận chuyển cho mèo',
    price: 320000,
    image: "./img/balo-cho-meo.jpg",
    category: 'Giường nệm'
  }
];

// ================= VẬT DỤNG KHÁC =================
const vatdung = [
  {
    id: 1,
    name: 'Cần Câu Mèo Đính Chuông Lông Vũ',
    price: 60000,
    image: "./img/dc_1.webp",
    category: 'Vật dụng khác'
  },
  {
    id: 2,
    name: 'Bàn Cào Móng Giấy Cho Mèo + Tặng Cỏ Mèo',
    price: 90000,
    image: "./img/dc_2.webp",
    category: 'Vật dụng khác'
  },
  {
    id: 3,
    name: 'Cây Lăn Mát Xa Cho Mèo Thư Giãn CattyMan',
    price: 110000,
    image: "./img/dc_3.webp",
    category: 'Vật dụng khác'
  },
  {
    id: 4,
    name: 'Đồ chơi thú bông cắn gặm cho chó',
    price: 75000,
    image: "./img/dc_4.jpg",
    category: 'Vật dụng khác'
  },
  {
    id: 5,
    name: 'Áo cho chó nhỏ',
    price: 150000,
    image: "./img/ao-len-cho-cho-nho.jpg",
    category: 'Vật dụng khác'
  },
  {
    id: 6,
    name: 'Vòng cổ bóng phát sáng',
    price: 95000,
    image: "./img/vongco.webp",
    category: 'Vật dụng khác'
  },
  {
    id: 7,
    name: 'Khay ăn cho mèo',
    price: 85000,
    image: "./img/khay_an.jpg",
    category: 'Vật dụng khác'
  },
  {
    id: 8,
    name: 'Đồ chơi cho chó',
    price: 180000,
    image: "./img/do_choi_cho_cho.webp",
    category: 'Vật dụng khác'
  },
  {
    id: 9,
    name: 'Vệ sinh tai thú cưng',
    price: 45000,
    image: "./img/vs_tai_TC.jpg",
    category: 'Vật dụng khác'
  },
  {
    id: 10,
    name: 'Đồ chơi nước cho mèo',
    price: 99000,
    image: "./img/dochoi.webp",
    category: 'Vật dụng khác'
  },
  {
    id: 11,
    name: 'Đèn LED cho chuồng',
    price: 75000,
    image: "./img/den.jpg",
    category: 'Vật dụng khác'
  },
  {
    id: 12,
    name: 'Bàn chải matxa lông',
    price: 120000,
    image: "./img/bannchai.jpg",
    category: 'Vật dụng khác'
  },
  {
    id: 13,
    name: 'Túi đựng quần áo thú cưng',
    price: 180000,
    image: "./img/quanao.jpg",
    category: 'Vật dụng khác'
  },
  {
    id: 14,
    name: 'Giày bảo vệ chân chó',
    price: 95000,
    image: "./img/giay.webp",
    category: 'Vật dụng khác'
  },
  {
    id: 15,
    name: 'Cỏ khô cho thỏ',
    price: 60000,
    image: "./img/co.jpg",
    category: 'Vật dụng khác'
  },
  {
    id: 16,
    name: 'Lót nước chống tràn',
    price: 45000,
    image: "./img/lot.jpg",
    category: 'Vật dụng khác'
  }
];

// Gắn vào window
window.meo = meo;
window.cho = cho;
window.giuongnem = giuongnem;
window.vatdung = vatdung;

// Hàm thêm vào giỏ hàng
function themVaoGio(name, price) {
  alert(`Đã thêm vào giỏ: ${name} - ${price.toLocaleString()}đ`);
}