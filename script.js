// ============================================
// RentSphere - script.js
// Simple JavaScript for college project
// ============================================


// ============================================
// 1. LOGIN BUTTON - Show "Login Successful!"
// ============================================
const loginBtn = document.querySelector('#loginBtn');

if (loginBtn) {
  loginBtn.addEventListener('click', function () {
    alert('Login Successful!');
  });
}


// ============================================
// 2. REGISTER LINK - Show coming soon message
// ============================================
const registerLink = document.querySelector('#registerLink');

if (registerLink) {
  registerLink.addEventListener('click', function (e) {
    e.preventDefault(); // Stop page from jumping
    alert('Registration page coming soon!');
  });
}


// ============================================
// 3. BOOK NOW BUTTONS - Show booking alert
//    Works for property.html and vehicle.html
// ============================================
const bookBtns = document.querySelectorAll('.bookBtn');

if (bookBtns.length > 0) {
  bookBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      alert('Booking Successful!');
    });
  });
}


// ============================================
// 4. BACK TO HOME BUTTON - Redirect to index.html
// ============================================
const backBtn = document.querySelector('#backToHome');

if (backBtn) {
  backBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
}


// ============================================
// END OF SCRIPT
// ============================================