const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".links");

mobileMenuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
});
