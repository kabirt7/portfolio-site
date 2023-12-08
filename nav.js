function scrollToSection(section) {
  document.getElementById(section).scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  const menuItems = document.querySelector(".nav__wrap");
  menuItems.classList.toggle("show");
}

function clickLeft() {
  let container = document.querySelector(".work2__container");
  container.scrollTo({
    left: container.scrollLeft - 300,
    top: 0,
    behavior: "smooth",
  });
}

function clickRight() {
  let container = document.querySelector(".work2__container");
  container.scrollTo({
    left: container.scrollLeft + 300,
    top: 0,
    behavior: "smooth",
  });
}
