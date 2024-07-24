let coursesData = [];
const rnw = async () => {
        const res = await fetch('https://e-learing.onrender.com/Courses');
        const data = await res.json();
        coursesData = data;
        renderCourses(coursesData);
};
const renderCourses = (courses) => {
    const div1 = document.getElementById('product');
    div1.innerHTML = '';
    courses.forEach(course => {
        const div = document.createElement('div');
        div.className = 'subcourse';
        div.dataset.name = course.title;

        const img = document.createElement('img');
        img.src = course.image;
        img.alt = course.title;
        img.style.height = "230px";

        const details = document.createElement('div');
        details.className = 'details';

        const cname = document.createElement('h2');
        cname.textContent = course.title;

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${course.rating} (${course.reviewCount} reviews)`;

        const recourse = document.createElement('p');
        recourse.textContent = `Duration: ${course.durationHours} hours`;

        const price = document.createElement('p');
        price.textContent = `Price: $${course.price}`;

        const btnadd = document.createElement('button');
        btnadd.textContent = 'Add to Cart';
        btnadd.className = 'add-to-cart-btn';
        btnadd.addEventListener('click', () => addcart(course.title));

        details.append(cname, rating, recourse, price, btnadd);
        div.append(img, details);
        div1.append(div);
    });
};

const addcart = (courseTitle) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const course = coursesData.find(item => item.title === courseTitle);
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
};

document.getElementById('price').addEventListener('click', () => {
    coursesData.sort((a, b) => a.price - b.price); 
    renderCourses(coursesData);
});

document.getElementById('rating').addEventListener('click', () => {
    coursesData.sort((a, b) => b.rating - a.rating); 
    renderCourses(coursesData);
});

rnw();

document.getElementById('searchInput').addEventListener('input', function (event) {
    filterCourses(event.target.value);
  });

document.getElementById('addcourse').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '../index-file/add.html'
});

 function output() {
            const coursediv = document.getElementById('courses-container');
            let courses = JSON.parse(localStorage.getItem('courses')) || [];
            
            coursediv.innerHTML = '';

            courses.map(course => {
                const div = document.createElement('div');
                div.className = 'course';

                const title = document.createElement('h2');
                title.textContent = course.title;

                const img = document.createElement('img');
                img.src = course.image;
                img.alt = course.title;

                const topic = document.createElement('p');
                topic.innerHTML = course.topics;

                const sub = document.createElement('p');
                sub.innerHTML = course.subs;

                const des = document.createElement('p');
                des.innerHTML = course.description;

                div.append(title, img, topic, sub, des);
               coursediv.append(div);
            });
        }
        output();