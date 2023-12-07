function scrollToSection(section) {
  document.getElementById(section).scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  const menuItems = document.querySelector(".nav__wrap");
  menuItems.classList.toggle("show");
}
