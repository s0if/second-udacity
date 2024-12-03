const navbarMenu = document.querySelector(".navbar__menu");
const mainSections = document.querySelectorAll("section");
const buildNav = () => {
  const navList = document.createElement("ul");
  navList.classList.add("navbar__list");
  mainSections.forEach((section) => {
    const navItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.textContent = section.getAttribute("data-nav");
    anchor.href = `#${section.id}`;
    anchor.classList.add("menu__link");
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
    navItem.appendChild(anchor);
    navList.appendChild(navItem);
  });

  navbarMenu.appendChild(navList);
};
const setActiveSection = () => {
  mainSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`a[href="#${section.id}"]`);
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      section.classList.add("your-active-class");
      link.classList.add("active-link");
    } else {
      section.classList.remove("your-active-class");
      link.classList.remove("active-link");
    }
  });
};
const makeNavbarResponsive = () => {
  const burgerMenu = document.createElement("div");
  burgerMenu.classList.add("burger-menu");
  burgerMenu.innerHTML = "<span></span><span></span><span></span>";

  burgerMenu.addEventListener("click", () => {
    const navList = document.querySelector(".navbar__list");
    navList.classList.toggle("responsive");
  });
  navbarMenu.insertBefore(burgerMenu, navbarMenu.firstChild);
};
document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  makeNavbarResponsive();
  window.addEventListener("scroll", setActiveSection);
});
