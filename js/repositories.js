import { toggleDropdown } from "./toggle.js";
import {
  furnishInformationSection,
  furnishRepositories,
  furnishOthers,
} from "./renderInterfaces.js";

const newButton = document.getElementById("new-button");
const toggleNavButton = document.getElementById("toggle-nav-btn");
const hideableNav = document.getElementById("hideable-nav");
const hideableSearch = document.getElementById("hideable-search");
const newItemDropdown = document.getElementById("new-items-dropdown");

toggleDropdown(toggleNavButton, hideableNav);
toggleDropdown(toggleNavButton, hideableSearch);
toggleDropdown(newButton, newItemDropdown);

const store = localStorage.getItem("githubUser");

if (JSON.parse(store)?.data?.user) {
  const {
    data: {
      user: { avatarUrl, name, bio, login, status, repositories },
    },
  } = JSON.parse(store);

  furnishInformationSection({ avatarUrl, name, bio, login, status });

  furnishRepositories(repositories);
  furnishOthers({ avatarUrl, login, totalRepos: repositories.totalCount });

  // if (window.innerWidth > 767) {
  import("./intersectionObserver.js").then((Module) => {
    Module.addSmallerProfile();
  });
  // }
} else {
  location.replace("/index.html");
}
