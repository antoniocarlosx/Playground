document.addEventListener("DOMContentLoaded", () => {
  const menuToggler = document.querySelector(".menu-toggler");
  const navMenu = document.querySelector(".nav-menu");

  menuToggler.classList.toggle("active");
  navMenu.classList.toggle("active");

  menuToggler.addEventListener("click", () => {
    menuToggler.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
});
