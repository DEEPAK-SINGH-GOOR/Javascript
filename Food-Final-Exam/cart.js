document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsList = document.getElementById('cart-items');

    if (cartItems.length === 0) {
        cartItemsList.innerHTML = '<li class="list-group-item">Your cart is empty.</li>';
    } else {
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${item.name} (Rating: ${item.rating}, City: ${item.city})`;
            cartItemsList.appendChild(listItem);
        });
    }
});
