const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger &&
  hamburger.addEventListener("click", () => {
    navLinks && navLinks.classList.toggle("expanded");
  });