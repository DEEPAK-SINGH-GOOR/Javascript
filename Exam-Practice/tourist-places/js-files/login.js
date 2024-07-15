const bookdata = () => {
    let myBooks = JSON.parse(localStorage.getItem('myBooks')) || [];
    myBooks.map((info) => {
        let tr = document.createElement("div");

        let td1 = document.createElement("h4");
        td1.innerHTML = info.name;

        let td2 = document.createElement("img");
        td2.src = info.img;
        td2.style.height = "200px";
        let td3 = document.createElement("p");
        td3.innerHTML = info.Description;

        let td4 = document.createElement("b");
        td4.innerHTML = info.Cost;

        let likebtn = document.createElement("button");
        likebtn.innerHTML = info.likes;

        tr.append(td1, td2, td3, td4, likebtn);
        output2.append(tr);

    });
};
bookdata();