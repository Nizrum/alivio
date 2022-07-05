const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuButton = document.querySelector(".header__menu-button");
const mobileMenuCloseButton = document.querySelector(".mobile-menu__close-button");
const body = document.querySelector("body");

function toggleMenu() {
    mobileMenu.classList.toggle("mobile-menu_active");
    body.classList.toggle("no-scroll");
}

mobileMenuButton.addEventListener('click', toggleMenu);
mobileMenuCloseButton.addEventListener('click', toggleMenu);