document.addEventListener("DOMContentLoaded", () => {
    const buyNowBtn = document.getElementById("buyNowBtn");
    const qtyInput = document.getElementById("qtyInput");

    if (!buyNowBtn || !qtyInput) return;

    buyNowBtn.addEventListener("click", () => {
        // Lấy thông tin sản phẩm từ HTML
        const prodTitleEl = document.getElementById("prodTitle");
        const priceEl = document.getElementById("price");
        const mainImgEl = document.getElementById("mainImg");

        const currentProduct = {
            id: prodTitleEl.dataset.id || prodTitleEl.textContent.trim(),
            name: prodTitleEl.textContent.trim(),
            price: parseInt(priceEl.textContent.replace(/[^0-9]/g, "")),
            image: mainImgEl.src,
            quantity: parseInt(qtyInput.value) || 1
        };

        // Lưu vào localStorage (chỉ 1 sản phẩm Mua ngay)
        localStorage.setItem("cart", JSON.stringify([currentProduct]));

        // Chuyển sang trang thanh toán
        window.location.href = "thanhtoan.html";
    });
});
