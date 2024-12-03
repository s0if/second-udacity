/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// Select main elements
const navbarMenu = document.querySelector(".navbar__menu");
const mainSections = document.querySelectorAll("section");

// Function to create the navigation menu
const buildNav=()=> {
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
}

// Function to set the active section and nav link
const setActiveSection=()=> {
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
}

// Add responsiveness
const makeNavbarResponsive=()=> {
  const burgerMenu = document.createElement("div");
  burgerMenu.classList.add("burger-menu");
  burgerMenu.innerHTML = "<span></span><span></span><span></span>";

  burgerMenu.addEventListener("click", () => {
    const navList = document.querySelector(".navbar__list");
    navList.classList.toggle("responsive");
  });

  navbarMenu.insertBefore(burgerMenu, navbarMenu.firstChild);
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  makeNavbarResponsive();
  window.addEventListener("scroll", setActiveSection);
});
