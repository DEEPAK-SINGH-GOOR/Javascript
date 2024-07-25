export function createNavbar() {
    return `
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid" id="navv">
      <a class="navbar-brand" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/JBL_logo.svg/2500px-JBL_logo.svg.png" alt="" height="60px"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./index.html" id="word">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./product.html" id="word">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./myproduct.html" id="word">MyProduct</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./cart.html" id="word">Cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./sign.html" id="word">Sign Up</a>
          </li>
          
        </ul>
        <div class="search-form d-flex" role="search">
          <div class="row">
            <div class="col-4"><i class="fa-solid fa-cart-shopping text-dark" id="cartpage"></i></div>
            <div class="col-4"><i class="fa-solid fa-magnifying-glass text-dark"></i></div>
            <div class="col-4"><i class="fa-solid fa-circle-user text-dark"></i></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
    `;
}

export function insertNavbar() {
    document.body.insertAdjacentHTML('afterbegin', createNavbar());
}
