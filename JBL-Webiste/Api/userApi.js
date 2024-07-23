export const createUser = async (user) => {
    if (await isExists(user.email)) {
        alert("User already exist!");
        window.location.href = "/finalExam/html/login.html";
    }
    else {
        fetch(`https://jsonserver-xpeq.onrender.com/user`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)

            })
        alert('User added successfully!')
        window.location.href = "/finalExam/html/login.html";
        // console.log(Data)
    }
}


export const isExists = async (email) => {

    let req = await fetch(`https://jsonserver-xpeq.onrender.com/user?email=${email}`)
    let res = await req.json()

    if (res.length > 0) {
        return true
    }
    else (false)
}

export const getUser = async () => {
    let req = await fetch(`https://jsonserver-xpeq.onrender.com/user`)
    let res = await req.json()
    return res
}

export const login = async (user) => {
    // console.log(user);
    let req = await fetch(`https://jsonserver-xpeq.onrender.com/user?email=${user.username}`)
    let res = await req.json()
    // console.log(res.length);
    if (res.length == 0) {
        alert("User not found");
        window.location.href = '/finalExam/html/signup.html';
    }
    else if (res.length == 1 && res[0].password == user.password) {
        alert("Logged in");

window.location.href="/finalExam/index.html"
        document.getElementById("navbar").innerHTML = navbar("logout", res[0].username)
    }
    else if (res.length == 1 && res[0].password != user.password) {
        alert("password mismatch")
    }
    else {
        alert("Login failed");
        window.location.href = './singup.html';

    }
}


export const updateUser = async (id, user) => {
    let req = await fetch(`https://jsonserver-xpeq.onrender.com/user/${id}`,
        {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
}

export const DeleteUser = async (id) => {
    let req = await fetch(`https://jsonserver-xpeq.onrender.com/user/${id}`, {
        method: "DELETE",
    })
}