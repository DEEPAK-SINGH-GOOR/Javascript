const api = async ()=>{
    let response = await fetch('https://localhost:3000/name');
    let data = await response.json();
    console.log(data);
    return data;
}
api();
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'card col-md-3';
    productCard.style.width = '18rem';
    productCard.style.margin = '10px';
  
    const img = document.createElement('img');
    img.src = product.img;
    img.className = 'card-img-top';
    img.alt = 'Product Image';
  
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
  
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = product.cardTitle;
  
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = product.cardText;
  
    const textPrimary = document.createElement('p');
    textPrimary.className = 'text-primary';
    textPrimary.textContent = product.textPrimary;
  
    const price = document.createElement('h5');
    price.className = 'card-title';
    price.textContent = product.price;
  
    const orderLink = document.createElement('a');
    orderLink.href = product.orderLink;
    orderLink.className = 'btn btn-danger product-btn';
    orderLink.textContent = 'Order Now';
  
    const addToCartBtn = document.createElement('a');
    addToCartBtn.href = '#';
    addToCartBtn.className = 'btn btn-success product-btn';
    addToCartBtn.innerHTML = 'Add To Cart <i class="fa-solid fa-cart-shopping"></i>';
  
    addToCartBtn.addEventListener('click', () => {
      // Retrieve cart from localStorage
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      // Add the selected product
      cart.push(product);
      // Save cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    });
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(textPrimary);
    cardBody.appendChild(price);
    cardBody.appendChild(orderLink);
    cardBody.appendChild(addToCartBtn);
  
    productCard.appendChild(img);
    productCard.appendChild(cardBody);
  
    return productCard;
  }
  