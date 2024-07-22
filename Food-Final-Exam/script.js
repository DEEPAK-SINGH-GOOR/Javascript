
const api = async () => {
    let response = await fetch('http://localhost:3000/Food_Data');
    let data = await response.json();
    console.log(data);

    data.map(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';

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

        recipeDiv.appendChild(detailsDiv);

        document.getElementById('product').appendChild(recipeDiv);
    });
}
api();

document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sort');
    const filterInput = document.getElementById('filter');
    const recipeContainer = document.querySelector('.recipe-container');
    let recipes = Array.from(document.querySelectorAll('.recipe'));

    sortSelect.addEventListener('change', sortRecipes);
    filterInput.addEventListener('input', filterRecipes);

    function sortRecipes() {
        const sortBy = sortSelect.value;
        recipes.sort((a, b) => {
            if (sortBy === 'name') {
                return a.dataset.name.localeCompare(b.dataset.name);
            } else if (sortBy === 'date') {
                return new Date(a.dataset.date) - new Date(b.dataset.date);
            }
        });
        recipeContainer.innerHTML = '';
        recipes.forEach(recipe => recipeContainer.appendChild(recipe));
    }

    function filterRecipes() {
        const filterText = filterInput.value.toLowerCase();
        recipes.forEach(recipe => {
            const name = recipe.dataset.name.toLowerCase();
            if (name.includes(filterText)) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    }
});
