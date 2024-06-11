
let data = [
    {
        "id": 17,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 500.00,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded ",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    },
    {
        "id": 18,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 500.00,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded ",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    },
    {
        "id": 19,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 500.00,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded ",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    },
    {
        "id": 19,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 500.00,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded ",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    }
];

data.map((info) => {
    let img = document.createElement("img");
    img.src = info.image;

    let image = document.createElement("div");
    image.append(img);

    let title = document.createElement("h3");
    title.innerHTML = info.title;

    let price = document.createElement("h3");
    price.innerHTML = info.price;

    let button = document.createElement("button");
    button.innerHTML = "Buy Now";
    button.className = "buy";

    let div = document.createElement("div");
    div.append(image, title, price, button);



    document.getElementById("product").append(div);
});

let employee = [];

const uimaker = () => {
    document.getElementById("output").innerHTML = "";
    employee.map((info) => {
        let td1 = document.createElement("td");
        td1.innerHTML = info.name;

        let td2 = document.createElement("td");
        td2.innerHTML = info.number;

        let td3 = document.createElement("td");
        td3.innerHTML = info.exp;

        let td4 = document.createElement("td");
        td4.innerHTML = info.email;

        let td5 = document.createElement("td");;
        td5.innerHTML = info.deposite;

        // let td6 = document.createElement("tr");
        // td6.innerHTML = info.rename;

        let td7 = document.createElement("td");
        td7.innerHTML = info.redeposite + info.deposite;

        // let td8 = document.createElement("td");
        // td8.innerHTML = info.redeposite;

        let tr = document.createElement("tr");
        tr.append(td1, td2, td3, td4, td7);
        console.log(td7);

        document.getElementById("output").append(tr);
    });
};

const Employeelist = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let exp = document.getElementById("exp").value;
    let email = document.getElementById("email").value;
    let deposite = +document.getElementById("deposite").value;
    let redeposite = +document.getElementById("redeposite").value;
    let rename = document.getElementById("rename").value;

    if (name === "" || deposite === "" || !/^\d+$/.test(number) || !/^\d+$/.test(exp) || exp < 0 || !/\S+@\S+\.\S+/.test(email)) {
        alert("All details are required.");
        return;
    }

    let data = {
        name: name,
        number: number,
        exp: exp,
        email: email,
        deposite: deposite,
        redeposite: redeposite,
        rename: rename,
    };
    employee.push(data);
    uimaker();
};

document.getElementById("submit").addEventListener("click", Employeelist);
const purchase = (price, employee) => {
    if (employee.deposite >= price) {
        let sum = employee.deposite + employee.redeposite;
        sum -=price;
        alert(`Purchase successful! Your new balance is ${sum}`);
    } else {
        alert("Insufficient balance for this purchase.");
    }
};

document.querySelectorAll('.buy').forEach((button, index) => {
    button.addEventListener('click', () => {
        purchase(data[index].price, employee[0]); 
    });
});