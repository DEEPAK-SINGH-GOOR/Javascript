document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();

    let user = { // Making Object
        userid: document.querySelector("#userid").value,
        contact: document.querySelector("#contact").value,
        password: document.querySelector("#password").value,
        cpassword: document.querySelector("#cpassword").value,
        email: document.querySelector("#email").value,
    }

    console.log(user, user.userid); // Only For testing
    let hasError = false;

    const useridRegex = /^[a-zA-Z0-9_]{3,16}$/;
    const contactRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // For Userid
    if (!useridRegex.test(user.userid)) {
        document.querySelector("#userid-message").innerText = "Invalid User Name";
        document.querySelector("#userid").style.border = "1px solid red";
        hasError = true;
    } else {
        document.querySelector("#userid-message").innerText = "";
        document.querySelector("#userid").style.border = "1px solid green";
    }
    // For contact 
    if (!contactRegex.test(user.contact)) {
        document.querySelector("#contact-message").innerText = "Invalid Contact";
        document.querySelector("#contact").style.border = "1px solid red";
        hasError = true;
    } else {
        document.querySelector("#contact-message").innerText = "";
        document.querySelector("#contact").style.border = "1px solid green";
    }
    // For Password
    if (!passwordRegex.test(user.password)) {
        document.querySelector("#password-message").innerText = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character";
        document.querySelector("#password").style.border = "1px solid red";
        hasError = true;
    } else {
        document.querySelector("#password-message").innerText = "";
        document.querySelector("#password").style.border = "1px solid green";
    }
    // For cpassword
    if (user.cpassword !== user.password) {
        document.querySelector("#cpassword-message").innerText = "Passwords do not match";
        document.querySelector("#cpassword").style.border = "1px solid red";
        hasError = true;
    } else {
        document.querySelector("#cpassword-message").innerText = "";
        document.querySelector("#cpassword").style.border = "1px solid green";
    }
    // For email
    if (!emailRegex.test(user.email)) {
        document.querySelector("#email-message").innerText = "Invalid Email";
        document.querySelector("#email").style.border = "1px solid red";
        hasError = true;
    } else {
        document.querySelector("#email-message").innerText = "";
        document.querySelector("#email").style.border = "1px solid green";
    }
    // For Error messages
    if (!hasError) {
        // If no errors, you can submit the form or redirect to another page
        console.log("Form submitted successfully!");
        window.location.href = 'index1.html';
    }

});
