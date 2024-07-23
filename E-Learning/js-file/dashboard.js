const displayCart = () => {
    const cartContainer = document.getElementById('cart');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(course => {
        const div = document.createElement('div');
        div.className = 'cart-item';

        const img = document.createElement('img');
        img.src = course.image;
        img.alt = course.title;

        const title = document.createElement('h2');
        title.textContent = course.title;

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${course.rating} (${course.reviewCount} reviews)`;


        const recourse = document.createElement('p');
        recourse.textContent = `Duration: ${course.durationHours} hours`;

        const price = document.createElement('p');
        price.textContent = `Price: $${course.price.toFixed(2)}`;

        div.append(img, title, rating,recourse,price,);
        cartContainer.append(div);
    });
};

window.onload = displayCart;
