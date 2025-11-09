// ===================== khuyenmai.js =====================

// Gom tất cả sản phẩm thành 1 mảng
const allProducts = [
    ...meo.map(p => ({ ...p, type: "meo" })),
    ...cho.map(p => ({ ...p, type: "cho" })),
    ...giuongnem.map(p => ({ ...p, type: "giuongnem" })),
    ...vatdung.map(p => ({ ...p, type: "vatdung" }))
];

// Hàm sinh giá khuyến mãi ngẫu nhiên 20–70%
function randomDiscount(price) {
    const discount = Math.floor(Math.random() * 51) + 20; // 20–70%
    const newPrice = Math.round(price * (100 - discount) / 100);
    return { discount, newPrice };
}

// Format số thành VNĐ
function formatPrice(price) {
    return price.toLocaleString("vi-VN") + "đ";
}

// Hàm escape HTML để an toàn
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Render sản phẩm lên trang
function renderProducts(products) {
    const container = document.getElementById("list-khuyenmai");
    if (!container) return;

    container.innerHTML = ""; // Xóa cũ

    products.forEach(p => {
        const { discount, newPrice } = randomDiscount(p.price);
        const safeName = escapeHtml(p.name);

        const card = document.createElement("div");
        card.className = "col-6 col-md-4 col-lg-3 mb-3";

        card.innerHTML = `
            <div class="product-card border p-2 rounded shadow-sm position-relative h-100">
                <div class="discount-badge">-${discount}%</div>
                    <a href="chitietsanpham.html?type=${p.type}&id=${p.id}"
                    style="text-decoration:none; color:inherit;">
                    <img src="../${p.image}" class="product-img w-100 rounded-top" alt="${safeName}">
                    <div class="p-3 text-center">
                        <h6 class="fw-bold">${safeName}</h6>
                        <div class="d-flex justify-content-center align-items-baseline gap-2">
                            <p class="text-danger fw-bold fs-5 mb-0">${formatPrice(newPrice)}</p>
                            <p class="text-muted mb-0"><del>${formatPrice(p.price)}</del></p>
                        </div>
                    </div>
                </a>
                <div class="px-3 pb-3">
                    <button class="btn btn-outline-danger w-100 fw-semibold add-to-cart"
                        data-product='${JSON.stringify({
                            id: p.id,
                            type: p.type,
                            name: p.name,
                            price: newPrice,
                            image: p.image
                        })}'>
                        <i class="bi bi-cart-plus"></i> Thêm vào giỏ
                    </button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    // GẮN SỰ KIỆN CHO TẤT CẢ NÚT SAU KHI ĐÃ THÊM VÀO DOM
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function () {
            const data = JSON.parse(this.dataset.product);
            themVaoGio(data.name, data.price);
        });
    });
}

// Hàm sắp xếp theo tên hoặc giá
function sortProducts(criteria) {
    let sorted = [...allProducts];
    if (criteria === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "price") {
        sorted.sort((a, b) => a.price - b.price);
    }
    renderProducts(sorted);
}

// Khi load trang
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(allProducts);

    // Gắn sự kiện lọc
    const filterSelect = document.getElementById("filter-select");
    if (filterSelect) {
        filterSelect.addEventListener("change", (e) => {
            sortProducts(e.target.value);
        });
    }
});