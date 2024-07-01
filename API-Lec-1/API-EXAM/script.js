const getData = async () => {
    let req = await fetch("https://dummyjson.com/products");
    let res = await req.json();
    console.log(res);

    res.products.forEach(info => {
        let image = document.createElement("img");
        image.src = info.thumbnail; 
        image.style.height = "100px";

        let title = document.createElement("h3");
        title.innerHTML = info.title;

        let price = document.createElement("button");
        price.innerHTML = `$${info.price}`;
        price.style.background = "blue";
        
        price.addEventListener("click", () => {
            window.location.href = ``;
        });

        let category = document.createElement("p");
        category.innerHTML = info.category;

        let description = document.createElement("p");
        description.innerHTML = info.description;

        let div = document.createElement("div");
        div.classList.add("product");
        div.append(image, title, category, description, price);

        document.getElementById("product").append(div);
    });
};

getData();

// price.addEventListener("click", () => {
//     window.location.href = `https://dummyjson.com/products/${info.id}`;
// });
