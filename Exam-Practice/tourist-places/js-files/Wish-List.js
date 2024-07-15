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
        td4.innerHTML = info.Cost;

        let td5 = document.createElement("button");
        td5.innerHTML = "Book Now";
        td5.style.backgroundColor = "blue";
        td5.addEventListener("click", () => {
            mybook(index);
        });

        let td6 = document.createElement("button");
       
        td6.style.backgroundColor = "green";
        
        td6.innerHTML= "Like";
        td6.addEventListener("click", () => {
            likeBook(index);
        });
     
        let td7 = document.createElement("b");
        let like = document.createElement("span");
        like.id = `like-${index}`;
        like.textContent = info.likes || 0;
        td7.append(like);

        tr.append(td1, td2, td3, td4, td5, td6, td7);
        document.getElementById("output").append(tr);
    });
};


const mybook = (index) => {
    const book = library[index];
    myBooks.push(book);
    localStorage.setItem('myBooks', JSON.stringify(myBooks));
    alert("Place added successfully to Book-Secition!");
    window.location.href = "/tourist-places/Exam-Practice/index-file/login.html";
};

const likeBook = (index) => {
    library[index].likes = library[index].likes ? library[index].likes + 1 : 1;
    localStorage.setItem('library', JSON.stringify(library));

    let likeElement = document.getElementById(`like-${index}`);
    if (likeElement) {
        likeElement.textContent = library[index].likes;
    }
};

bookdata();