

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function () {
    const signInForm = document.getElementById('signInForm');
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = signInForm.elements['username'].value.trim();
        const emailOrPhone = signInForm.elements['emailOrPhone'].value.trim();
        const password = signInForm.elements['password'].value.trim();
        if (!username || !emailOrPhone || !password) {
            alert('All details are required!');
            return;
        }
        window.location.href = 'index.html';
        alert('Sign In Successful !!');
    });
    document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;

    if (username && emailOrPhone && password) {
       
        localStorage.setItem('isUserSignedUp', 'true');
        window.location.href = 'product.html';
    } else {
        alert('Please fill in all fields.');
    }
});

function checkSignInStatus() {
    if (localStorage.getItem('isUserSignedUp') !== 'true') {
        window.location.href = 'sign.html';
    }
}

document.addEventListener('DOMContentLoaded', checkSignInStatus);

});

