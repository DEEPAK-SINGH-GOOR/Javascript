document.getElementById("signin-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Check if user is signed in
    let signdata = JSON.parse(localStorage.getItem('signdata')) || [];
    if (signdata.length === 0) {
        // Redirect to sign-in page if no user is signed in
        alert("Please sign in first.");
        window.location.href = './index-file/sigin.html';
        return;
    }

    const bookdata = {
        name: document.getElementById("name").value,
        img: document.getElementById("img").value,
        Description: document.getElementById("Description").value,
        Cost: document.getElementById("Cost").value
    };

    let library = JSON.parse(localStorage.getItem('library')) || [];
    library.push(bookdata);
    localStorage.setItem('library', JSON.stringify(library));
    alert("Place added successfully!");
});
