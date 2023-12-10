document.addEventListener("DOMContentLoaded", function () {
  let userInteractedWithNavbar = false;
  let isScrolling = false;
  let scrollTimeout;

  const handleScroll = () => {
    if (userInteractedWithNavbar) {
      userInteractedWithNavbar = false;
      return;
    }

    console.log("made it!");

    if (!isScrolling) {
      isScrolling = true;

      const sections = document.querySelectorAll(".page");
      const viewportHeight = window.innerHeight;
      const halfViewportAbove = viewportHeight * 0.5;
      const currentPosition = window.scrollY + halfViewportAbove;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;

        if (
          sectionTop <= currentPosition &&
          currentPosition < sectionTop + rect.height
        ) {
          scrollToSection(section.id);
        }
      });

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 20);
    }
  };

  window.addEventListener("wheel", handleScroll);

  window.addEventListener("beforeunload", () => {
    window.removeEventListener("wheel", handleScroll);
  });
});

function scrollToSection(section) {
  document.getElementById(section).scrollIntoView({ behavior: "smooth" });

  // Get the navigation link element by ID
  const navLink = document.getElementById(`${section}-nav`);

  navLink && navLink.classList.contains("nav__wrap__link--active")
    ? null
    : navLink
    ? (document
        .querySelectorAll(".nav__wrap__link")
        .forEach((link) => link.classList.remove("nav__wrap__link--active")),
      navLink.classList.add("nav__wrap__link--active"))
    : null;
}

function toggleMenu() {
  const menuItems = document.querySelector(".nav__wrap");
  menuItems.classList.toggle("show");
}

function clickLeft() {
  let container = document.querySelector(".work2__container");
  container.scrollTo({
    left: container.scrollLeft - 341,
    top: 0,
    behavior: "smooth",
  });
}

function clickRight() {
  let container = document.querySelector(".work2__container");
  container.scrollTo({
    left: container.scrollLeft + 341,
    top: 0,
    behavior: "smooth",
  });
}
