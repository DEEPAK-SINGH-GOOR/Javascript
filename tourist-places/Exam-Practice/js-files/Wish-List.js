let library = JSON.parse(localStorage.getItem('library')) || [];

const bookdata = () => {
    document.getElementById("output").innerHTML = "";
    // let library = JSON.parse(localStorage.getItem('library')) || [];
    library.map((info) => {
        let td1 = document.createElement("td");
        td1.innerHTML = info.name;

        let td2 = document.createElement("td");

        let img = document.createElement("img");
        img.src = info.img;
        img.style.width = "100px";
        td2.append(img);

        let td4 = document.createElement("td");
        td4.innerHTML = info.Description;

        td5 = document.createElement("b");
        td5.innerHTML = info.Cost;


        td6 = document.createElement("button");
        td6.innerHTML = "Vist";

        td6.addEventListener("click", () => {
            window.open(index.innerHTML);
        });

        let tr = document.createElement("tr");
        tr.append(td1, td2, td4, td5, td6);

        document.getElementById("output").append(tr);
    });
};
bookdata();

let data = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,

        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
       
        "price": 22.3,
        "description": " breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
        
    },
    {
        "id": 3,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
       
        "price": 22.3,
        "description": "comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
        
    },
    {
        "id": 4,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
       
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great ",
        "category": "men's clothing",
        
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
        
    }
];

data.map((info) => {
   
    let img = document.createElement("img");
    img.src = info.image;
    let image = document.createElement("div");
    image.append(img);
    let title = document.createElement("h2");
    title.innerHTML = info.title; 
    let description = document.createElement("i");
    description.innerHTML = info.description;

    let price = document.createElement("b");
    price.innerHTML = `$${info.price}`;

    let button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.onclick = () => addToCart(info);
   
    let div = document.createElement("div");
    div.append(image, title, price, description, button);

    document.getElementById("product").append(div);
});
// const addToCart = (info) => {
//     let library = JSON.parse(localStorage.getItem('library')) || [];
//     library.push(info);
//     localStorage.setItem('library', JSON.stringify(library));
//     alert("Product Add Successfully to The Cart" );
//     bookdata(); 
// };