document.addEventListener("DOMContentLoaded", function () {

    // ======== HÀM ĐỊNH DẠNG TIỀN TỆ ========
    const formatVND = (price) => Number(price).toLocaleString("vi-VN");

    // ======== HÀM HIỂN THỊ DANH SÁCH SẢN PHẨM ========
    const renderProductList = (products, containerId, type) => {
        const productListContainer = document.getElementById(containerId);
        if (!productListContainer) return;

        // Đảm bảo xóa nội dung cũ trước khi render
        productListContainer.innerHTML = "";
        productListContainer.classList.add("row");

        products.forEach(product => {
            const productHtml = `
                <div class="col-md-5 col-lg-4 mb-4"> 
                    <div class="product-card border p-4 rounded shadow-sm h-100">
                        <!-- Khi click toàn card => mở trang chi tiết -->
                        <a href="chitietsanpham.html?type=${type}&id=${product.id}" 
                           style="text-decoration: none; color: inherit;">
                            <img src="../${product.image}" 
                                 class="img-fluid mb-3 rounded" 
                                 alt="${product.name}"
                                 style="height: 260px; object-fit: cover; width: 100%;">
                            <h5 class="fw-bold text-center">${product.name}</h5>
                            <p class="text-muted text-center">${product.desc || ""}</p>
                        </a>

                        <div class="cost d-flex justify-content-between align-items-center mt-3">
                            <p class="text-danger fw-bold mb-0">
                                Giá: ${formatVND(product.price)}đ
                            </p>
                            <button class="btn add-to-cart" style="border: 1px solid #DC143C; background-color: #DC143C; color: white; transition: all 0.3s ease;" 
                            onmouseover="this.style.backgroundColor='#b31030'; this.style.borderColor='#b31030'; this.style.transform='scale(1.1)'; this.style.boxShadow='0 4px 12px rgba(220,20,60,0.4)'"
                            onmouseout="this.style.backgroundColor='#DC143C'; this.style.borderColor='#DC143C'; this.style.transform='scale(1)'; this.style.boxShadow='none'"
                                onclick="themVaoGio({
                                    id: ${product.id},
                                    type: '${type}',
                                    name: '${product.name}',
                                    price: ${product.price},
                                    image: '${product.image}'
                                })">
                                <i class="bi bi-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            productListContainer.innerHTML += productHtml;
        });
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

    // ======== GỌI HÀM HIỂN THỊ SẢN PHẨM MÈO ========
    renderProductList(window.meo, "meo", "meo");

});
