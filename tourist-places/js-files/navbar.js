function navbar ()  {
    return `<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/project/index.html"><img src="https://png.pngtree.com/png-clipart/20230319/original/pngtree-travel-logo-design-template-for-business-and-company-png-image_8995704.png" alt="" height="50px"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/tourist-places/Exam-Practice/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/tourist-places/Exam-Practice/index-file/sigin.html">sign in</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/tourist-places/Exam-Practice/index-file/Wish-List.html">Wish-List</a>
                      </li>
                </ul>
                <form class="d-flex" role="search" id="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                        id="searchValue" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>`;
};

export default navbar;
document.getElementById('navbar').innerHTML = navbar();