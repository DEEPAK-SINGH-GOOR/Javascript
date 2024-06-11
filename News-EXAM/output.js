let userdata = JSON.parse(localStorage.getItem('usedata')) || [];

const uimaker = (data) => {
    document.getElementById('output').innerHTML = ""; 
    data.forEach((ele) => {
        let img = document.createElement('img');
        img.src = ele.img;

        let name = document.createElement('h3');
        name.innerHTML = ele.name;

        let email = document.createElement('p');
        email.innerHTML = ele.email;

        let country = document.createElement('p');
        country.innerHTML = ele.country; 

        let btn1 = document.createElement('button');
        btn1.innerHTML = 'Like';

        let btn2 = document.createElement('button');
        btn2.innerHTML = 'View Profile';

        let div = document.createElement('div');
        div.append(img, name, email, country,  btn1, btn2);

        document.getElementById("output").append(div); 
    });
}
uimaker(userdata);
