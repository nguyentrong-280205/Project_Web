document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form.needs-validation");

    if (!form) {
        console.error("Không tìm thấy form!");
        return;
    }

    // Tạo container hiển thị thông báo lỗi/success
    let msgContainer = document.createElement("div");
    msgContainer.style.marginTop = "10px";
    form.prepend(msgContainer);

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Chặn reload trang
        msgContainer.innerHTML = ""; // Reset thông báo

        const phone = document.getElementById("sdt").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validate rỗng
        if (!phone || !password) {
            msgContainer.innerHTML = `<p style="color:red;">Vui lòng điền đầy đủ thông tin.</p>`;
            return;
        }

        // Lấy danh sách user từ localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Tìm user theo phone + password
        const user = users.find(u => u.phone === phone && u.password === password);

        if (!user) {
            msgContainer.innerHTML = `<p style="color:red;">Số điện thoại hoặc mật khẩu không đúng.</p>`;
            return;
        }

        // Lưu trạng thái đăng nhập
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        msgContainer.innerHTML = `<p style="color:green;">Chào mừng ${user.name}, bạn đã đăng nhập thành công!</p>`;

        window.location.href = "../html/index.html"; // đổi đường dẫn đúng
        
    });
});
