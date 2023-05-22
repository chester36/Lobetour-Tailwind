const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__actions");
  toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
});

const links = document.querySelectorAll(".footer__items__links h5");
links.forEach((baba) => {
    baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
    });
});