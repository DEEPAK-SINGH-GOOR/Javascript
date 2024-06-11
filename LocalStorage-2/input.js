document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let price = document.getElementById('price').value;
    let category = document.getElementById('category').value;
    let img = document.getElementById('img').value;

    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({ title, price, category, img });
    localStorage.setItem('products', JSON.stringify(products));
     alert('Product added successfully!');
    window.location.href = 'output.html';
});
