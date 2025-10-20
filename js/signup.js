// signup.js
// Đăng ký tài khoản: lưu vào localStorage, kiểm tra hợp lệ

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.btn-primary');
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const firstName = inputs[0].value.trim();
    const lastName = inputs[1].value.trim();
    const username = inputs[2].value.trim();
    const email = inputs[3].value.trim();
    const password = inputs[4].value;
    const confirmPassword = inputs[5].value;

    if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    if (password !== confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }
    // Kiểm tra username đã tồn tại chưa
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.username === username)) {
      alert('Username đã tồn tại!');
      return;
    }
    // Lưu user mới
    users.push({ firstName, lastName, username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đăng ký thành công!');
    // Có thể chuyển hướng sang trang đăng nhập
    window.location.href = 'login.html';
  });
});