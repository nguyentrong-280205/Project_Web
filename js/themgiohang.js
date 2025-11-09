// ==== Lấy giỏ hàng từ localStorage ====
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ==== Lưu giỏ hàng vào localStorage ====
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ==== Thêm sản phẩm vào giỏ ====
function themVaoGio(sp) {
  let cart = getCart();
  let existing = cart.find(
    (item) => item.id === sp.id && item.type === sp.type
  );

  if (existing) {
    existing.quantity += sp.qty || 1;
  } else {
    cart.push({
      id: sp.id,
      type: sp.type,
      name: sp.name,
      price: Number(String(sp.price).replace(/[^\d]/g, "")), // bỏ ký tự VNĐ, dấu chấm, ₫
      image: sp.image,
      quantity: sp.qty || 1,
    });
  }

  saveCart(cart);
}

// ==== Hiển thị giỏ hàng (trang giohang.html) ====
function renderCart() {
  const cartTable = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  if (!cartTable || !totalEl) return;

  let cart = getCart();
  cartTable.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let itemPrice = Number(item.price);
    total += itemPrice * item.quantity;

    let row = `
            <tr>
                <td>${item.name}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" 
                        class="form-control form-control-sm" 
                        onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>${itemPrice.toLocaleString("vi-VN")} VNĐ</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Xóa</button>
                </td>
            </tr>
        `;
    cartTable.innerHTML += row;
  });

  totalEl.textContent = total.toLocaleString("vi-VN") + " VNĐ";
}

// ==== Cập nhật số lượng ====
function updateQuantity(index, newQty) {
  let cart = getCart();
  cart[index].quantity = parseInt(newQty);
  saveCart(cart);
  renderCart();
}

// ==== Xóa sản phẩm ====
function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

// ==== Kiểm tra đăng nhập khi vào trang giỏ hàng ====
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("giohang.html")) {
    const loggedInUser =
      JSON.parse(sessionStorage.getItem("loggedInUser")) ||
      JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      alert("Bạn cần đăng nhập trước khi truy cập giỏ hàng.");
      window.location.href = "../html/login.html";
      return;
    }
  }

  // Sau khi kiểm tra thì render giỏ hàng (nếu có)
  renderCart();
});

// ==== Xuất ra global để dùng trong HTML ====
window.themVaoGio = themVaoGio;
window.updateQuantity = updateQuantity;
window.removeItem = removeItem;
