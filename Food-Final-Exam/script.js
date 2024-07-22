// Function to add a recipe to the cart
const addToCart = (recipeName) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    fetch('http://localhost:3000/Food_Data')
        .then(response => response.json())
        .then(data => {
            const recipe = data.find(item => item.name === recipeName);
            if (recipe) {
                if (!cart.some(item => item.name === recipeName)) {
                    cart.push(recipe);
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
            }
        });
    alert('Added to cart successfully');
    window.location.href = 'cart.html';
};

// Function to fetch and display recipes
const api = async (city = '') => {
    let response = await fetch('http://localhost:3000/Food_Data');
    let data = await response.json();
    displayRecipes(data, city);
};

// Function to display recipes
const displayRecipes = (recipes, city) => {
    const productContainer = document.getElementById('product');
    productContainer.innerHTML = ''; // Clear previous recipes

    // Filter recipes by city if provided
    if (city) {
        recipes = recipes.filter(recipe => recipe.city.toLowerCase() === city.toLowerCase());
    }

    // Display filtered recipes
    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.dataset.name = recipe.name;

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

        const price = document.createElement('p');
        price.textContent = `Price: $${recipe.price}`;
        detailsDiv.appendChild(price);

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.className = 'add-to-cart-btn';
        addToCartBtn.addEventListener('click', () => addToCart(recipe.name));
        detailsDiv.appendChild(addToCartBtn);

        recipeDiv.appendChild(detailsDiv);
        productContainer.appendChild(recipeDiv);
    });

    if (recipes.length === 0) {
        alert('No recipes found for this city.');
    }
};

// Function to sort recipes
const sortRecipes = (criteria) => {
    fetch('http://localhost:3000/Food_Data')
        .then(response => response.json())
        .then(data => {
            if (criteria === 'city') {
                data.sort((a, b) => a.city.localeCompare(b.city));
            } else if (criteria === 'price') {
                data.sort((a, b) => a.price - b.price);
            } else if (criteria === 'rating') {
                data.sort((a, b) => b.rating - a.rating);
            }
            const userCity = document.getElementById('city-input').value;
            displayRecipes(data, userCity);
        });
};

// Event listeners for sorting
document.getElementById('city').addEventListener('click', () => sortRecipes('city'));
document.getElementById('price').addEventListener('click', () => sortRecipes('price'));
document.getElementById('rating').addEventListener('click', () => sortRecipes('rating'));

// Event listener for filtering by city
document.getElementById('filter-city').addEventListener('click', () => {
    const userCity = document.getElementById('city-input').value;
    api(userCity);
});

// Initialize the display with all recipes
api();
