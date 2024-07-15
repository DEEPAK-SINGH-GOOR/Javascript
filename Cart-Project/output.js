let products = JSON.parse(localStorage.getItem('products')) || [];
const delet = (index) => {
    products.splice(index, 1);
    uimaker(products);
    localStorage.setItem('products', JSON.stringify(products));
}

const uimaker = (data) => {
    document.getElementById('output').innerHTML = ""
    data.map((ele, data) => {
        let img = document.createElement('img');
        img.src = ele.img;

        let title = document.createElement('h3');
        title.innerHTML = ele.title;

        let price = document.createElement('p');
        price.innerHTML = ele.price;

        let category = document.createElement('span');
        category.innerHTML = ele.category;

        let btn1 = document.createElement('button');
        btn1.innerHTML = 'Delete';
        btn1.addEventListener('click', () => delet(data));

        let btn2 = document.createElement('button');
        btn2.innerHTML = 'Buy Now';

        let div = document.createElement('div');
        div.append(img, title, price, category, btn1, btn2);

        document.getElementById("output").append(div);
        output.append(div);
    });
}

uimaker(products);
