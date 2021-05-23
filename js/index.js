const toggleNavButton = document.getElementById("toggle-nav-btn");
const newButton = document.getElementById("new-button");
const hideableNav = document.getElementById("hideable-nav");
const hideableSearch = document.getElementById("hideable-search");
const newItemDropdown = document.getElementById("new-items-dropdown");

const getUserData = (query) => {
  const response = {};

  fetch(`https://api.github.com/graphql?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      response.uiDetails = data;
    })
    .catch((error) => {
      response.error = error;
    });

  return response;
};

const toggleDropdown = (button, dropdown) => {
  button.addEventListener("click", () => {
    dropdown.classList.toggle("open-nav");
  });

  document.addEventListener("click", (e) => {
    if (!button.contains(e.target)) {
      dropdown.classList.remove("open-nav");
    }
  });
};

toggleDropdown(toggleNavButton, hideableNav);
toggleDropdown(toggleNavButton, hideableSearch);
toggleDropdown(newButton, newItemDropdown);
