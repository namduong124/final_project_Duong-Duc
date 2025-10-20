// auth.js
// Hiển thị tên người dùng sau khi đăng nhập, ẩn nút đăng ký/đăng nhập nếu đã đăng nhập

document.addEventListener('DOMContentLoaded', function() {
  // Kiểm tra trạng thái đăng nhập
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const headerMenu = document.querySelector('.header_menu');
  const headerRight = document.querySelector('.header_right');

  // Thêm nút đăng nhập/đăng ký nếu chưa đăng nhập
  if (!user) {
    // Thêm nút đăng nhập/đăng ký vào header
    if (headerRight) {
      const loginBtn = document.createElement('a');
      loginBtn.href = '../login.html';
      loginBtn.className = 'header_login_btn';
      loginBtn.textContent = 'Sign In';
      headerRight.appendChild(loginBtn);

      const signupBtn = document.createElement('a');
      signupBtn.href = '../signup.html';
      signupBtn.className = 'header_signup_btn';
      signupBtn.textContent = 'Sign Up';
      headerRight.appendChild(signupBtn);
    }
  } else {
    // Nếu đã đăng nhập, hiển thị tên và nút đăng xuất
    if (headerRight) {
      const userDiv = document.createElement('div');
      userDiv.className = 'header_user';
      userDiv.textContent = '👤 ' + (user.firstName || user.username);
      headerRight.appendChild(userDiv);

      const logoutBtn = document.createElement('button');
      logoutBtn.textContent = 'Log out';
      logoutBtn.className = 'header_logout_btn';
      logoutBtn.onclick = function() {
        localStorage.removeItem('currentUser');
        window.location.reload();
      };
      headerRight.appendChild(logoutBtn);
    }
  }
});
