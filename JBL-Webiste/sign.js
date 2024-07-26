// document.getElementById('signInForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const emailOrPhone = document.getElementById('emailOrPhone').value;
//     const password = document.getElementById('password').value;

//     if (username && emailOrPhone && password) {
       
//         localStorage.setItem('isUserSignedUp', 'true');
//         window.location.href = 'product.html';
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

// function checkSignInStatus() {
//     if (localStorage.getItem('isUserSignedUp') !== 'true') {
//         window.location.href = 'sign.html';
//     }
// }

// document.addEventListener('DOMContentLoaded', checkSignInStatus);
