document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const bookdata = {
        email: document.getElementById("email").value,
        Password: document.getElementById("password").value
    };

    let signdata = JSON.parse(localStorage.getItem('signdata')) || [];
    signdata.push(bookdata);
    localStorage.setItem('signdata', JSON.stringify(signdata));
    alert("Login-successfully!");

    window.location.href = './index.html';
});
