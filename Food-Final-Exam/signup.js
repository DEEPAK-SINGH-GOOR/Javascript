document.getElementById("signin-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const bookdata = {
        name: document.getElementById("username").value,
        email: document.getElementById("email").value,
        Password: document.getElementById("password").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value
    };

    let signdata = JSON.parse(localStorage.getItem('signdata')) || [];
    signdata.push(bookdata);
    localStorage.setItem('signdata', JSON.stringify(signdata));
    alert("Sign-IN successfully!");

    window.location.href = './index.html';
});

