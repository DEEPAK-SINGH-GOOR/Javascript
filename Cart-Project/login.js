import getValue from "../components/helper.js";
let userData = JSON.parse(localStorage.getItem("user"))

const handleData = (e) => {
    e.preventDefault();

    let user = {
        email: getValue("email"),
        password: getValue("password"),
    }
    if (userData) {
        if (userData.email != user.email) {
            alert("user not found: " + user.email)
        }

        else if (userData.password != user.password) {
            alert("password mismatch: " + user.password)
        }
        else {
            alert("login success: " + user.username)
            localStorage.setItem("isLogin", true);
        }
    }
    else {
        alert("please sign up ")

        setTimeout(() => { window.location.href = "/project/pages/Signup.html" }, 300)
    }
}
document.getElementById("userData").addEventListener("submit", handleData)