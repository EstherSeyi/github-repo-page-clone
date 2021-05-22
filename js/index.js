const toggleNavButton = document.getElementById("toggle-nav-btn");
const hideableNav = document.getElementById("hideable-nav");
const hideableSearch = document.getElementById("hideable-search");

toggleNavButton.addEventListener("click", () => {
  hideableNav.classList.toggle("open-nav");
  hideableSearch.classList.toggle("open-nav");
});
