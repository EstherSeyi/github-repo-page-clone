export function toggleDropdown(button, dropdown) {
  button.addEventListener("click", () => {
    dropdown.classList.toggle("open-nav");
  });

  document.addEventListener("click", (e) => {
    if (!button.contains(e.target)) {
      dropdown.classList.remove("open-nav");
    }
  });
}
