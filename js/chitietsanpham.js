document.addEventListener("DOMContentLoaded", function () {

  // Lấy tham số từ URL
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const id = parseInt(params.get("id"));

  // Kiểm tra dữ liệu hợp lệ
  if (!type || !id) {
    alert("Không tìm thấy thông tin sản phẩm.");
    window.location.href = "index.html"; // ← ĐÃ SỬA: về trang chủ
    return;
  }

  // Lấy danh sách sản phẩm theo loại
  const list = window[type];
  if (!list) {
    alert("Không có danh mục sản phẩm hợp lệ.");
    window.location.href = "index.html";
    return;
  }

  // Tìm sản phẩm theo id
  const product = list.find(p => p.id === id);
  if (!product) {
    alert("Không tìm thấy sản phẩm này.");
    window.location.href = "index.html";
    return;
  }

  // ==============================
  // 1. Gán dữ liệu sản phẩm vào HTML
  // ==============================
  const mainImg = document.getElementById("mainImg");
  const thumbs = document.getElementById("thumbs");
  const prodTitle = document.getElementById("prodTitle");
  const brand = document.getElementById("brand");
  const shortDesc = document.getElementById("shortDesc");
  const features = document.getElementById("features");
  const longDesc = document.getElementById("longDesc");
  const rating = document.getElementById("rating");
  const reviewsCount = document.getElementById("reviewsCount");
  const price = document.getElementById("price");
  const totalPrice = document.getElementById("totalPrice");
  const qtyInput = document.getElementById("qtyInput");

  const formatVND = (n) => Number(n).toLocaleString("vi-VN") + "₫";

  // Dữ liệu cơ bản
  prodTitle.textContent = product.title || product.name;
  brand.textContent = product.brand || "";
  shortDesc.textContent = product.short || product.desc || "Không có mô tả.";
  longDesc.textContent = product.long || "";

  // Giá
  price.textContent = formatVND(product.price);
  totalPrice.textContent = formatVND(product.price);

  // Đánh giá
  const stars = Math.round(product.rating || 4);
  rating.innerHTML = "⭐".repeat(stars);
  reviewsCount.textContent = product.reviews || 0;

  // Tính năng
  features.innerHTML = product.features
    ? product.features.map(f => `<li>• ${f}</li>`).join("")
    : "<li>Không có thông tin chi tiết.</li>";

  // ==============================
  // 2. XỬ LÝ ẢNH (CHỈ SỬA 2 DÒNG DƯỚI)
  // ==============================
  const images = (product.images || [product.image]).map(img => "../" + img); // ← SỬA 1: thêm ../
  
  if (images && images.length > 0) {
    mainImg.src = images[0]; // ← SỬA 2: dùng mảng đã thêm ../

    if (images.length > 1) {
      thumbs.innerHTML = images.map((img, i) => `
        <img src="${img}" class="${i === 0 ? "active" : ""}" data-index="${i}" style="cursor:pointer;">
      `).join("");

      // Thay đổi ảnh chính
      thumbs.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", function () {
          document.querySelectorAll("#thumbs img").forEach(t => t.classList.remove("active"));
          this.classList.add("active");
          mainImg.src = this.src;
        });
      });
    }
  }

  // ==============================
  // 3. XỬ LÝ SỐ LƯỢNG & TỔNG TIỀN
  // ==============================
  const qtyMinus = document.getElementById("qtyMinus");
  const qtyPlus = document.getElementById("qtyPlus");

  const updateTotal = () => {
    const qty = parseInt(qtyInput.value) || 1;
    totalPrice.textContent = formatVND(product.price * qty);
  };

  qtyMinus.addEventListener("click", () => {
    let val = parseInt(qtyInput.value);
    if (val > 1) {
      qtyInput.value = val - 1;
      updateTotal();
    }
  });

  qtyPlus.addEventListener("click", () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
    updateTotal();
  });

  qtyInput.addEventListener("input", updateTotal);

  // ==============================
  // 4. NÚT “THÊM VÀO GIỎ HÀNG” VÀ “MUA NGAY”
  // ==============================
  const addCartBtn = document.getElementById("addCartBtn");
  const buyNowBtn = document.getElementById("buyNowBtn");

  addCartBtn.addEventListener("click", () => {
    const qty = parseInt(qtyInput.value);
    themVaoGio({
      id: product.id,
      type,
      name: product.title || product.name,
      price: product.price,
      image: images[0], // ← dùng ảnh đã thêm ../
      qty
    });
    alert("Đã thêm sản phẩm vào giỏ hàng!");
  });

  buyNowBtn.addEventListener("click", () => {
    const qty = parseInt(qtyInput.value);
    themVaoGio({
      id: product.id,
      type,
      name: product.title || product.name,
      price: product.price,
      image: images[0],
      qty
    });
    window.location.href = "giohang.html"; // ← cùng cấp
  });
});