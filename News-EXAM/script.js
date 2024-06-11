document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let img = document.getElementById('img').value;
    let country = document.getElementById('country').value;
    
    let usedata = JSON.parse(localStorage.getItem('usedata')) || [];
    usedata.push({ name, email, password, img, country });
    localStorage.setItem('usedata', JSON.stringify(usedata));
    
    alert('Login successfully!');
    window.location.href = 'output.html';
});
