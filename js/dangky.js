document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form.needs-validation");

    if (!form) {
        console.error("Không tìm thấy form!");
        return;
    }

    console.log("dangky.js đã được load!");

    // Tạo container hiển thị thông báo lỗi/success
    let msgContainer = document.createElement("div");
    msgContainer.style.marginTop = "10px";
    form.prepend(msgContainer);

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Chặn reload trang
        msgContainer.innerHTML = ""; // Reset thông báo

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("sdt").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Validate các trường bắt buộc
        if (!name || !phone || !password || !confirmPassword) {
            msgContainer.innerHTML = `<p style="color:red;">Vui lòng điền đầy đủ thông tin.</p>`;
            return;
        }

        // Validate mật khẩu trùng khớp
        if (password !== confirmPassword) {
            msgContainer.innerHTML = `<p style="color:red;">Mật khẩu và xác nhận mật khẩu không khớp.</p>`;
            return;
        }

        // Validate số điện thoại Việt Nam
        if (!/^0[35789]\d{8}$/.test(phone)) {
            msgContainer.innerHTML = `<p style="color:red;">Số điện thoại không hợp lệ (10 số, bắt đầu 0).</p>`;
            return;
        }

        // Lấy danh sách user từ localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Kiểm tra số điện thoại đã tồn tại chưa
        if (users.some(u => u.phone === phone)) {
            msgContainer.innerHTML = `<p style="color:red;">Số điện thoại này đã được đăng ký.</p>`;
            return;
        }

        // Thêm user mới
        users.push({ name, phone, password });
        localStorage.setItem("users", JSON.stringify(users));

        msgContainer.innerHTML = `<p style="color:green;">Đăng ký thành công! Chuyển hướng sang đăng nhập...</p>`;
            window.location.href = "../html/login.html";
    
    });
});
