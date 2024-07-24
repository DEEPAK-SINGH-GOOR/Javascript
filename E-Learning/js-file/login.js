document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const signdata = JSON.parse(localStorage.getItem('signdata')) || [];

    const user = signdata.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert("Login successful!");
        window.location.href = '../index-file/home.html';   
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
