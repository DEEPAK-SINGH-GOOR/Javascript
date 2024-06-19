let library = JSON.parse(localStorage.getItem('library')) || [];
let myBooks = JSON.parse(localStorage.getItem('myBooks')) || [];
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

const bookdata = () => {

    library.map((info, index) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = info.name;

        let td2 = document.createElement("td");
        td2.innerHTML = info.author;
        let td3 = document.createElement("td");
        td3.innerHTML = info.description;
        let td4 = document.createElement("td");
        td4.innerHTML = info.date;
        let td5 = document.createElement("td");
        td5.innerHTML = info.category;
        let td6 = document.createElement("td");
        td6.innerHTML = "Buy";
        td6.style.backgroundColor = "green";

        td6.addEventListener("click", () => {
            mybook(index);
        });

        let td7 = document.createElement("td");
        td7.innerHTML = "Add";
        td7.style.backgroundColor = "red";
        td7.addEventListener("click", () => {
            bookmark(index);
        });

        tr.append(td1, td2, td3, td4, td5, td6, td7);
        output.append(tr);
    });
};

const mybook = (index) => {
    const book = library[index];
    myBooks.push(book);
    localStorage.setItem('myBooks', JSON.stringify(myBooks));
    alert("Book added successfully to My Books!");
};

const bookmark = (index) => {
    const book = library[index];
    bookmarks.push(book);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    alert("Book added successfully to Bookmarks!");
};
bookdata();
