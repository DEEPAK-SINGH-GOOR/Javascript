document.addEventListener("DOMContentLoaded", () => {
    const product = JSON.parse(localStorage.getItem("product"));

        document.getElementById("img").src = product.thumbnail;
        document.getElementById("title").innerText = product.title;
        document.getElementById("cat").innerText = `Category: ${product.category}`;
        document.getElementById("des").innerText = product.description;
        document.getElementById("price").innerText = `$${product.price}`; 
});
