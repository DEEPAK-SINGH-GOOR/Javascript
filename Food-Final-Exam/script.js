const addcart = (recipename) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    fetch('https://json-server-ar4y.onrender.com/Food_Data')
        .then(response => response.json())
        .then(data => {
            const recipe = data.find(item => item.name === recipename);
            if (recipe) {
                if (!cart.some(item => item.name === recipename)) {
                    cart.push(recipe);
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
            }
        });
    alert('added to cart successfully');
    window.location.href = 'cart.html';
};

const recip = async (usercity = '') => {
    let res = await fetch('https://json-server-ar4y.onrender.com/Food_Data');
    let data = await res.json();
    show_recipes(data, usercity);
};

const show_recipes = (recipes, usercity) => {
    const product_container = document.getElementById('product');
    product_container.innerHTML = '';

    if (usercity) {
        recipes = recipes.filter(recipe => recipe.city.toLowerCase() === usercity.toLowerCase());
    }

    recipes.forEach(recipe => {
        const recipe_div = document.createElement('div');
        recipe_div.className = 'recipe';
        recipe_div.dataset.name = recipe.name;

        const img = document.createElement('img');
        img.src = recipe.image;

        const details_div = document.createElement('div');
        details_div.className = 'recipe-details';

        const recipe_name = document.createElement('h2');
        recipe_name.textContent = recipe.name;

        const recipe_rating = document.createElement('p');
        recipe_rating.textContent = `Rating: ${recipe.rating}`;

        const recipe_city = document.createElement('p');
        recipe_city.textContent = `City: ${recipe.city}`;

        const recipe_price = document.createElement('p');
        recipe_price.textContent = `Price: $${recipe.price}`;

        const add_btn = document.createElement('button');
        add_btn.textContent = 'Add to Cart';
        add_btn.className = 'add-to-cart-btn';
        add_btn.addEventListener('click', () => addcart(recipe.name));

        details_div.append(recipe_name, recipe_rating, recipe_city, recipe_price, add_btn);
     
        recipe_div.append(img, details_div);
      
        product_container.append(recipe_div);
    });

    if (recipes.length === 0) {
        alert('no recipes found for this city.');
    }
};

const sortrecpi = (criteria) => {
    fetch('https://json-server-ar4y.onrender.com/Food_Data')
        .then(response => response.json())
        .then(data => {
            if (criteria === 'city') {
                data.sort((a, b) => a.city.localeCompare(b.city));
            } else if (criteria === 'price') {
                data.sort((a, b) => a.price - b.price);
            } else if (criteria === 'rating') {
                data.sort((a, b) => b.rating - a.rating);
            }
            const usercity = document.getElementById('city-input').value;
            show_recipes(data, usercity);
        });
};

document.getElementById('city').addEventListener('click', () => sortrecpi('city'));
document.getElementById('price').addEventListener('click', () => sortrecpi('price'));
document.getElementById('rating').addEventListener('click', () => sortrecpi('rating'));

document.getElementById('filter-city').addEventListener('click', () => {
    const usercity = document.getElementById('city-input').value;
    recip(usercity);
});

recip();
