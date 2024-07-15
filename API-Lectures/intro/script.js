
const getData = async () => {
  
    let req = await fetch("https://fakestoreapi.com/products");
    let res = await req.json();
    console.log(res);

    
    res.map(info => {
        let img = document.createElement("img"); 
        img.src = info.image;
        img.style.height ="100px"

        let title = document.createElement("h3");
        title.innerHTML = info.title;

        let price = document.createElement("button");
        price.innerHTML = `$${info.price}`;
        price.style.background = "blue";

    

        let category = document.createElement("p");
        category.innerHTML = info.category;

        let div = document.createElement("div");
        div.classList.add("product");
        div.append(img,title,category ,price)
        
        document.getElementById("product").append(div);
    });
}
getData();
