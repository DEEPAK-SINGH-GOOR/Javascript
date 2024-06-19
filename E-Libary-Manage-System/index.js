document.getElementById("signin-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const newBook = {
        name: document.getElementById("name").value,
        author: document.getElementById("author").value,
        description: document.getElementById("description").value,
        date: document.getElementById("date").value,
        category: document.getElementById("category").value,
    };

    let library = JSON.parse(localStorage.getItem('library')) || [];
    library.push(newBook);
    localStorage.setItem('library', JSON.stringify(library));
    alert("Book added successfully!");
});
