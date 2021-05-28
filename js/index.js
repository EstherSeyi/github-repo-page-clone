import { toggleDropdown } from "./toggle.js";
import { disable, enable, loading, stopLoading } from "./buttonActions.js";
import { getQuery } from "./query.js";

const toggleNavButton = document.getElementById("toggle-nav-btn");
const hideableNav = document.getElementById("hideable-nav");
const hideableSearch = document.getElementById("hideable-search");
const searchBtn = document.getElementById("search-user-btn");
const usernameInput = document.getElementById("username");

const searchForm = document.getElementById("search-form");

toggleDropdown(toggleNavButton, hideableNav);
toggleDropdown(toggleNavButton, hideableSearch);

const formState = {
  username: "",
  loading: false,
  error: {},
};

disable(searchBtn);

usernameInput.addEventListener("input", (event) => {
  formState.username = event.target.value;
  if (formState.username.length >= 3) {
    enable(searchBtn);
  } else {
    disable(searchBtn);
  }
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = getQuery(formState.username);
  loading(searchBtn);

  import("./fetchData.js").then((Module) => {
    Module.getUserData(query, searchBtn, stopLoading);
  });
});
