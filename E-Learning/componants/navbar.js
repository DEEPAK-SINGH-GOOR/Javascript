export function createNavbar() {
    return `<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="https://png.pngtree.com/png-clipart/20230202/original/pngtree-education-logo-design-for-school-and-organization-png-image_8941357.png" alt="" height="50px"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="./home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">Sign-up</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./login.html">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./dashboard.html">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./add.html">Add-Course</a>
                    </li>
                </ul>
                <form class="d-flex" role="search" id="search-form">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search-input">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>`;
}

export function insertNavbar() {
    document.body.insertAdjacentHTML('afterbegin', createNavbar());
}
