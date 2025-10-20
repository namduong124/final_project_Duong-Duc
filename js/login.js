// login.js
// Xử lý đăng nhập với tài khoản mặc định: admin/1234
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.btn-primary');
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const username = inputs[0].value.trim();
    const password = inputs[1].value.trim();
    // Kiểm tra tài khoản mặc định
    if (username === 'admin' && password === '1234') {
  alert('Đăng nhập thành công!');
  localStorage.setItem('currentUser', JSON.stringify({ username: 'admin' }));
  window.location.href = 'index.html';
  return;
    }
    // Kiểm tra tài khoản đã đăng ký
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
  alert('Đăng nhập thành công!');
  localStorage.setItem('currentUser', JSON.stringify(user));
  window.location.href = 'index.html';
    } else {
      alert('Sai tài khoản hoặc mật khẩu!');
    }
  });
});