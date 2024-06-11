document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let usedata = JSON.parse(localStorage.getItem('usedata')) || [];
    // usedata.push({ name, email, password});
    // localStorage.setItem('usedata', JSON.stringify(usedata));
    
    alert('sign in successfully!');
    window.location.href = 'output.html';
});
