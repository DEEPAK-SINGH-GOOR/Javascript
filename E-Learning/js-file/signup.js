document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let signdata = JSON.parse(localStorage.getItem('signdata')) || [];
    const role = document.getElementById("select").value;
    const userExists = signdata.some(user => user.email === email);

    if (userExists) {
        alert("User already exists! Please log in.");
    } else {
        const bookdata = {
            email: email,
            password: password, 
            role:role
        };
        signdata.push(bookdata);
        localStorage.setItem('signdata', JSON.stringify(signdata));
        alert("Signup successful!");

        window.location.href = '../index-file/login.html';
    }
});
