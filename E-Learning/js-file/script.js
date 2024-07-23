
const rnw = async () => {
    const res = await fetch('https://e-learing.onrender.com/Courses');
    const data = await res.json();
    course(data);
};

const course = (courses) => {
    const div1 = document.getElementById('product');
    div1.innerHTML = '';

    courses.forEach(course => {
        const div = document.createElement('div');
        div.className = 'subcourse';
        div.dataset.name = course.title;

        const img = document.createElement('img');
        img.src = course.image;
        img.alt = course.title;
        img.style.height ="230px";

        const details = document.createElement('div');
        details.className = 'details';

        const cname = document.createElement('h2');
        cname.textContent = course.title;

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${course.rating} (${course.reviewCount} reviews)`;


        const recourse = document.createElement('p');
        recourse.textContent = `Duration: ${course.durationHours} hours`;

        const price = document.createElement('p');
        price.textContent = `Price: $${course.price.toFixed(2)}`;

        const add_btn = document.createElement('button');
        add_btn.textContent = 'Add to Cart';
        add_btn.className = 'add-to-cart-btn';
        add_btn.addEventListener('click', () => addcart(course.title));

        details.append(cname, rating, recourse, price, add_btn);


        div.append(img, details);

        div1.append(div);
    });

};
const addcart = (courseTitle) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    fetch('https://e-learing.onrender.com/Courses')
        .then(response => response.json())
        .then(data => {
            const course = data.find(item => item.title === courseTitle);
            if (course) {
                if (!cart.some(item => item.title === courseTitle)) {
                    cart.push(course);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    alert('Added to cart successfully');
                    window.location.href = 'dashboard.html';
                } else {
                    alert('Course is already in the cart.');
                }
            }
        })
        .catch(error => console.error('Error fetching courses:', error));
};
rnw();
