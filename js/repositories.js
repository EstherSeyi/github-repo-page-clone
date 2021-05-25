import { toggleDropdown } from "./toggle.js";

const newButton = document.getElementById("new-button");
const toggleNavButton = document.getElementById("toggle-nav-btn");
const hideableNav = document.getElementById("hideable-nav");
const hideableSearch = document.getElementById("hideable-search");
const newItemDropdown = document.getElementById("new-items-dropdown");

toggleDropdown(toggleNavButton, hideableNav);
toggleDropdown(toggleNavButton, hideableSearch);
toggleDropdown(newButton, newItemDropdown);

const user = localStorage.getItem("githubUser");

console.log(JSON.parse(user));
