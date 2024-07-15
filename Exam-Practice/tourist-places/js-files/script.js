document.getElementById("signin-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const bookdata = {
        name: document.getElementById("name").value,
        img: document.getElementById("img").value,
        Description: document.getElementById("Description").value,
        Cost: document.getElementById("Cost").value
    };

    let library = JSON.parse(localStorage.getItem('library')) || [];
    library.push(bookdata);
    localStorage.setItem('library', JSON.stringify(library));
    alert("Places added successfully!");
    bookdata();
});