// js/thanhtoan.js (ĐÃ SỬA HOÀN CHỈNH)
document.addEventListener("DOMContentLoaded", () => {
    const cartItemsEl = document.getElementById("cartItems");
    const totalPriceEl = document.getElementById("totalPrice");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        cartItemsEl.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;

            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.innerHTML = `
                <div class="d-flex align-items-center gap-3">
                    <img src="../${item.image}" alt="${item.name}" class="cart-item-img">
                    <div>
                        <h6 class="mb-0">${item.name}</h6>
                        <small>Số lượng: ${item.quantity}</small>
                    </div>
                </div>
                <span>${(item.price * item.quantity).toLocaleString("vi-VN")}₫</span>
            `;
            cartItemsEl.appendChild(li);
        });

        totalPriceEl.textContent = total.toLocaleString("vi-VN") + "₫";
    }

    renderCart();
});

// XỬ LÝ THANH TOÁN + LƯU HÓA ĐƠN
function handleCheckout() {
    const form = document.getElementById("checkoutForm");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Lấy thông tin khách hàng
    const fullname = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    // Lấy giỏ hàng
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Giỏ hàng trống!");
        return;
    }

    // Tính tổng tiền
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Tạo mã đơn hàng
    const orderId = "DH" + Date.now().toString().slice(-6);
    const orderDate = new Date().toLocaleString("vi-VN");

    // Tạo đối tượng đơn hàng
    const order = {
        orderId,
        orderDate,
        fullname,
        phone,
        address,
        items: cart,
        total
    };

    // LƯU VÀO localStorage
    localStorage.setItem("currentOrder", JSON.stringify(order));

    // XÓA GIỎ HÀNG
    localStorage.removeItem("cart");

    // CHUYỂN HƯỚNG
    window.location.href = "hoadon.html";
}