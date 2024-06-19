const bookdata = () => {
    let myBooks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    myBooks.map((info) => {
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

        tr.append(td1, td2, td3, td4, td5);
        output.append(tr);
    });
};

bookdata();

