document.addEventListener("DOMContentLoaded", function () {

    // Format tiền VNĐ
    const formatVND = (price) => Number(price).toLocaleString("vi-VN");

    // Escape HTML để tránh lỗi khi tên có ký tự đặc biệt
    const escapeHtml = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };

    // Hàm render sản phẩm
    const renderProductList = (products, containerId, type) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = ''; // xóa cũ

        products.forEach(product => {
            const safeName = escapeHtml(product.name);

            const col = document.createElement('div');
            col.className = 'col-md-3 mb-4';

            col.innerHTML = `
                <div class="product-card border p-3 rounded shadow-sm h-100 ms-5">
                    <a href="chitietsanpham.html?type=${type}&id=${product.id}" 
                       style="text-decoration: none; color: inherit;">
                        <img src="../${product.image}" class="img-fluid mb-2" alt="${safeName}">
                        <h6 style="font-weight: bold;">${safeName}</h6>
                    </a>
                    <div class="cost d-flex justify-content-between align-items-center mt-2">
                        <p class="text-danger fw-bold mb-0">Giá: ${formatVND(product.price)}đ</p>
                        <button class="btn add-to-cart" 
                            style="border: 1px solid #DC143C; background-color: #DC143C; color: white; transition: all 0.3s ease;" 
                            onmouseover="this.style.backgroundColor='#b31030'; this.style.borderColor='#b31030'; this.style.transform='scale(1.1)'; this.style.boxShadow='0 4px 12px rgba(220,20,60,0.4)'"
                            onmouseout="this.style.backgroundColor='#DC143C'; this.style.borderColor='#DC143C'; this.style.transform='scale(1)'; this.style.boxShadow='none'"
                            data-id="${product.id}"
                            data-type="${type}"
                            data-name="${safeName}"
                            data-price="${product.price}"
                            data-image="${product.image}">
                            <i class="bi bi-cart-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(col);
        });

        // Gắn sự kiện add-to-cart
        container.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', function () {
                const data = {
                    id: this.dataset.id,
                    type: this.dataset.type,
                    name: this.dataset.name,
                    price: Number(this.dataset.price),
                    image: this.dataset.image
                };
                // Thêm vào giỏ hàng
                window.themVaoGio(data);
                alert(`Đã thêm vào giỏ: ${data.name}`);
            });
        });
    };

    // Render tất cả danh sách
    renderProductList(window.meo, "list-meo", "meo");
    renderProductList(window.cho, "list-cho", "cho");
    renderProductList(window.giuongnem, "list-giuongnem", "giuongnem");
    renderProductList(window.vatdung, "list-vatdung", "vatdung");

});
