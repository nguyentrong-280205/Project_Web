document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("vatdung");
    if (!container) {
        console.error("Không tìm thấy #vatdung");
        return;
    }

    // ======== HÀM ĐỊNH DẠNG GIÁ ========
    const formatVND = (price) => Number(price).toLocaleString("vi-VN");

    // ======== GỘP DỮ LIỆU ========
    const allProducts = [...(window.vatdung || []), ...(window.giuongnem || [])];
    const type = "vatdung";

    if (allProducts.length === 0) {
        container.innerHTML = "<p class='text-center text-muted'>Chưa có sản phẩm.</p>";
        return;
    }

    // Xóa nội dung cũ
    container.innerHTML = "";
    container.classList.add("row");

    // ======== TẠO CARD + GẮN DATA ========
    allProducts.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
            <div class="product-card border p-4 rounded shadow-sm h-100">
                <a href="chitietsanpham.html?type=${type}&id=${product.id}" 
                   style="text-decoration: none; color: inherit;">
                    <img src="../${product.image}" 
                         class="img-fluid mb-3 rounded" 
                         alt="${product.name}"
                         style="height: 250px; object-fit: cover; width: 100%;">
                    <h5 class="fw-bold text-center">${product.name}</h5>
                    <p class="text-muted text-center">${product.desc || ""}</p>
                </a>

                <div class="cost d-flex justify-content-between align-items-center mt-3">
                    <p class="text-danger fw-bold mb-0">
                        Giá: ${formatVND(product.price)}đ
                    </p>
                    <button class="btn btn-light border-danger text-danger fw-semibold add-to-cart">
                        <i class="bi bi-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;

        // GẮN DATA VÀO BUTTON
        const btn = col.querySelector(".add-to-cart");
        btn.dataset.id = product.id;
        btn.dataset.type = type;
        btn.dataset.name = product.name;
        btn.dataset.price = product.price;
        btn.dataset.image = product.image;

        container.appendChild(col);
    });

    // ======== GẮN SỰ KIỆN CHO TẤT CẢ NÚT "THÊM GIỎ" ========
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", function () {
            const data = {
                id: this.dataset.id,
                type: this.dataset.type,
                name: this.dataset.name,
                price: Number(this.dataset.price),
                image: this.dataset.image
            };

            // GỌI HÀM TOÀN CỤC
            if (typeof window.themVaoGio === "function") {
                window.themVaoGio(data);
                alert(`Đã thêm vào giỏ: ${data.name}`);
            } else {
                console.error("Hàm themVaoGio chưa được định nghĩa!");
                alert("Lỗi: Chưa kết nối giỏ hàng.");
            }
        });
    });
});