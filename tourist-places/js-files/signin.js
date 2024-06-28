document.getElementById("signin-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const bookdata = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        Password: document.getElementById("Password").value
    };

    let signdata = JSON.parse(localStorage.getItem('signdata')) || [];
    signdata.push(bookdata);
    localStorage.setItem('signdata', JSON.stringify(signdata));
    alert("Sign-IN successfully!");
    bookdata();
    Window.location.href = '/tourist-places/Exam-Practice/index.html';
    bookdata();
});

const wishlist = (info) => {
    let library = JSON.parse(localStorage.getItem('library')) || [];
    library.push(info);
    localStorage.setItem('library', JSON.stringify(library));
    alert("Place Add To Wish List" );
    bookdata(); 
};
