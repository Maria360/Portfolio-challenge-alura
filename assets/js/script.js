document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.getElementById("menu-icon");
  let navbar = document.querySelector(".navbar");
  //   let navbar = document.querySelector(".header");

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav ul li a");

  console.log(navLinks);

  window.onscroll = () => {
    // let top = window.scrollY;

    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav ul li a[href='#" + id + "]")
            .classList.add("active");
        });
      }
    });
  };

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // Smooth scrolling
  navLinks.forEach((links) => {
    links.addEventListener("click", (e) => {
      e.preventDefault();
      let targetId = links.getAttribute("href");
      let targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        console.error("Target element not found:", targetId);
      }
    });
  });
});
