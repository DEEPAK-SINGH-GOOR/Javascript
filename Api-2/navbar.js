function navbar() {
    return `  <div class="w3-sidebar w3-light-grey w3-bar-block" style="width:25%">
        <h3 class="w3-bar-item">Menu</h3>
        <a href="./index.html" class="w3-bar-item w3-button">HOME PAGE</a>
        <a href="./product.html" class="w3-bar-item w3-button">PRODUCT DETAILS</a>
    </div>
        <div class="w3-container w3-teal">
            <h1>My Page</h1>
        </div>
    </div>
`;
};

export default navbar;
document.getElementById('navbar').innerHTML = navbar();