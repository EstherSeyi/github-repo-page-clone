function addSmallerProfile() {
  const avatarContainer = document.getElementById("avatar-container");
  const miniProfile = document.getElementById("mini-profile");

  let observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      miniProfile.classList.remove("hidden");
    } else {
      miniProfile.classList.add("hidden");
    }
  });
  observer.observe(avatarContainer);
}

export { addSmallerProfile };
