let isScrolling = false;
let scrollTimeout;

const handleScroll = () => {
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
    }, 200);
  }
};

window.addEventListener("wheel", handleScroll);

window.addEventListener("beforeunload", () => {
  window.removeEventListener("wheel", handleScroll);
});

function scrollToSection(section) {
  document.getElementById(section).scrollIntoView({ behavior: "smooth" });

  const navLink = document.getElementById(`${section}-nav`);

  navLink && navLink.classList.contains("nav__wrap__link--active")
    ? null
    : document
        .querySelectorAll(".nav__wrap__link")
        .forEach((link) => link.classList.remove("nav__wrap__link--active")),
    navLink.classList.add("nav__wrap__link--active");
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

function checkFormValidity() {
  var message = document.getElementById("message").value;
  var email = document.getElementById("email").value;
  var submitBtn = document.getElementById("submit-btn");

  // Check if both fields have content
  if (message.trim() !== "" && email.trim() !== "") {
    submitBtn.style.display = "block"; // Show the button
  } else {
    submitBtn.style.display = "none"; // Hide the button
  }
}
