// navbar.js
export function exportnavbar() {
  const navbarHTML = `
    <nav class="navbar">
      <div class="links">
        <a href="index.html">Home</a>
        <a href="Dashboard.html">Dashboard</a>
        <a href="MyBooks.html">My Books</a>
        <a href="Bookmarks.html">Bookmarks</a>
      </div>
    </nav>
  `;
  document.getElementById("navbar").innerHTML = navbarHTML;
}
