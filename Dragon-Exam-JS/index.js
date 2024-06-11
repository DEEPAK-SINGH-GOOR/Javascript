document.getElementById("form1").addEventListener("submit", function (e) {
    e.preventDefault();


    let im = document.getElementById("image").value;


    let Name = document.getElementById("name").value;

    let Price = document.getElementById("price").value;

    let img = document.createElement("img");
    img.src = im;

    let div = document.createElement("div");
    div.append(img);

    let title = document.createElement("h2");
    title.innerText = Name;

    let price = document.createElement("b");
    price.innerText = "$" + Price + " ";

    let buy = document.createElement("button");
    buy.innerText = "Buy Now";
    buy.className = "buy";

    let delet = document.createElement("button");
    delet.innerText = "Delete";
    delet.className = "delete";
       
    //delete
    delet.addEventListener("click", function () {
        Detail.remove();
    });

    let Detail = document.createElement("div");
    Detail.append(div, title, price, buy, delet);

    document.getElementById("product").append(Detail);
});
