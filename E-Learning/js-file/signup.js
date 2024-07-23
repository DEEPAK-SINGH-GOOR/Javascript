document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const bookdata = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        Password: document.getElementById("password").value,
        select: document.getElementById("select").value,
    };

    let signdata = JSON.parse(localStorage.getItem('signdata')) || [];
    signdata.push(bookdata);
    localStorage.setItem('signdata', JSON.stringify(signdata));
    alert("Also Login Is Compalsory");

    window.location.href = '../index-file/login.html';
});
