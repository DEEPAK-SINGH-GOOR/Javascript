const api = async () => {
    let response = await fetch('http://localhost:3000/Food_Data');
    let data = await response.json();
    console.log(data);

    const productContainer = document.getElementById('product');

    data.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.dataset.name = recipe.name;
        recipeDiv.dataset.date = recipe.date;  // Assuming you have a date field

        const img = document.createElement('img');
        img.src = recipe.image;
        recipeDiv.appendChild(img);

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'recipe-details';

        const name = document.createElement('h2');
        name.textContent = recipe.name;
        detailsDiv.appendChild(name);

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${recipe.rating}`;
        detailsDiv.appendChild(rating);

        const city = document.createElement('p');
        city.textContent = `City: ${recipe.city}`;
        detailsDiv.appendChild(city);

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.className = 'add-to-cart-btn';
        addToCartBtn.addEventListener('click', () => addToCart(recipe.name));
        detailsDiv.appendChild(addToCartBtn);

        recipeDiv.appendChild(detailsDiv);
        productContainer.appendChild(recipeDiv);
    });
}
api();

function addToCart(recipe) {
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = `${recipe.name} (Rating: ${recipe.rating}, City: ${recipe.city})`;
    cartItems.appendChild(listItem);
}