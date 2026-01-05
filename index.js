function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

/* Close menu when a nav link is clicked */
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav__links--list .nav__link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu--open");
    });
  });
});