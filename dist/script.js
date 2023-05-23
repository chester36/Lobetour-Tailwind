const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__actions");
  toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
});

const links = document.querySelectorAll(".footer__links__item h4");
links.forEach((baba) => {
    baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
    });
});

const faqs = document.querySelectorAll(".faq__question h4");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
    faq.nextElementSibling.classList.toggle("open");
    faq.querySelector("i").classList.toggle("open");
    });
});

const starNav = document.querySelectorAll(".star__nav__link");
const starContent = document.querySelectorAll(".coffee__tab__content");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    
    star.classList.add("active");
   
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((star) => {
    star.classList.remove("active");
  });
}