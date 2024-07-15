let library = JSON.parse(localStorage.getItem('library')) || [];
let myBooks = JSON.parse(localStorage.getItem('myBooks')) || [];

const bookdata = () => {
    library.forEach((info, index) => {
        let tr = document.createElement("div");

        let td1 = document.createElement("h3");
        td1.innerHTML = info.name;

        let td2 = document.createElement("img");
        td2.src = info.img;
        td2.style.height = "100px";

        let td3 = document.createElement("p");
        td3.innerHTML = info.Description;

        let td4 = document.createElement("b");
        td4.innerHTML = `Traveling Cost : ${info.Cost}`;

        let td5 = document.createElement("button");
        td5.innerHTML = "Book Now";
        td5.style.backgroundColor = "blue";
        td5.style.color = "white";
        td5.addEventListener("click", () => {
            mybook(index);
        });

        let td6 = document.createElement("div");
        
        let likeButton = document.createElement("button");
        likeButton.classList.add('like-button');
        likeButton.innerHTML = 'Like ' + (info.likes || 0);

        likeButton.addEventListener("click", () => {
            likeBook(index, likeButton);
        });

        td6.appendChild(likeButton);

        tr.append(td1, td2, td3, td4, td5, td6);
        document.getElementById("output").append(tr);

        initializeLike(index, likeButton);
    });
};

const mybook = (index) => {
    const book = library[index];
    myBooks.push(book);
    localStorage.setItem('myBooks', JSON.stringify(myBooks));
    alert("Place added successfully to Book-Section!");
    window.location.href = "./login.html";
};

const likeBook = (index, likeButton) => {
    library[index].likes = library[index].likes ? library[index].likes + 1 : 1;
    localStorage.setItem('library', JSON.stringify(library));
    sessionStorage.setItem(`likes-${index}`, library[index].likes);

    likeButton.innerHTML = 'Like ' + library[index].likes;
};

const initializeLike = (index, likeButton) => {
    const sessionLikes = sessionStorage.getItem(`likes-${index}`);
    if (sessionLikes) {
        library[index].likes = +sessionLikes;
        localStorage.setItem('library', JSON.stringify(library));
        likeButton.innerHTML = 'Like ' + library[index].likes;
    }
};

bookdata();
