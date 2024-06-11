document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let img = document.getElementById('img').value;
    let country = document.getElementById('country').value;
    
    let usedata = JSON.parse(localStorage.getItem('usedata')) || [];
    usedata.push({ name, img, country });
    localStorage.setItem('usedata', JSON.stringify(usedata));
    
    alert('News Add successfully!');
    window.location.href = 'output.html';
});


