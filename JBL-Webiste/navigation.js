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
});
