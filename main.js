// Nav

const menubtn = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".nav-things2");

menubtn.addEventListener("click", () => {
  navlinks.classList.toggle("mobile-menu");
});
