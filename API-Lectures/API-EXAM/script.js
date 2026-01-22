const getData = async () => {
    let req = await fetch("https://dummyjson.com/products");
    let res = await req.json();
    return res.products;
};

const prodata = (products) => {
    document.getElementById("product").innerHTML = "";
    
    products.forEach(info => {
        let image = document.createElement("img");
        image.src = info.thumbnail;
        image.style.height = "150px";

        let title = document.createElement("h3");
        title.innerHTML = info.title;

        let price = document.createElement("button");
        price.innerHTML = info.price;
        price.style.background = "blue";
        price.style.color = "white";
        price.style.padding = "10px";
        price.style.borderRadius = "5px";

        price.addEventListener("click", () => {
            localStorage.setItem("product", JSON.stringify(info));
            window.location.href = "product.html";
        });

        let category = document.createElement("p");
        category.innerHTML = info.category;

        let description = document.createElement("p");
        description.innerHTML = info.description;

        let div = document.createElement("div");
        div.classList.add("product");
        div.append(image, title, category, description, price);

        document.getElementById("product").append(div);
    });
};

const calculat = async () => {
    let products = await getData();
    prodata(products);

    document.getElementById('lowToHigh').addEventListener('click', () => {
        let sorting = products.sort((a, b) => a.price - b.price);
        prodata(sorting);
    });

    document.getElementById('highToLow').addEventListener('click', () => {
        let sorting = products.sort((a, b) => b.price - a.price);
        prodata(sorting);
    });
};

calculat();
////////
import jwt from "jsonwebtoken";

const checkToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: "No Token" });
  }

  const decoded = jwt.decode(token);
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    return res.status(401).send({ message: "Token Expired" });
  }

  req.user = decoded;
  next();
};

export default checkToken;
//
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return children;
  }

  fetch("/check-token", {
    headers: {
      Authorization: token,
    },
  }).then(res => {
    if (res.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  });

  const { role } = jwtDecode(token);

  if (role === "superadmin") return <Navigate to="/superDashboard" />;
  if (role === "admin") return <Navigate to="/adminDashboard" />;
  if (role === "user") return <Navigate to="/userDashboard" />;
};

export default AuthRoute;
