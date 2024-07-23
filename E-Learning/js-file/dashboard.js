const displayCart = () => {
    const cartContainer = document.getElementById('cart');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartContainer.innerHTML = '';

    cart.forEach((course, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        const number = document.createElement('div');
        number.className = 'cart-item-number';
        const img = document.createElement('img');
        img.src = course.image;
        img.alt = course.title;
        const details = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = course.title;
        const rating = document.createElement('p');
        rating.textContent = `Rating: ${course.rating} (${course.reviewCount} reviews)`;
        const recourse = document.createElement('p');
        recourse.textContent = `Duration: ${course.durationHours} hours`;
        const price = document.createElement('p');
        price.textContent = `Price: $${course.price.toFixed(2)}`;
        details.append(title, rating, recourse, price);
        div.append(number, img, details);
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => removeFromCart(course.title));

        div.append(deleteBtn);
        cartContainer.append(div);
    });
};

const removeFromCart = (courseTitle) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.title !== courseTitle);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); 
};
window.onload = displayCart;
