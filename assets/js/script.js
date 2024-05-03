document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.getElementById("menu-icon");
  let navbar = document.querySelector(".navbar");
  //   let navbar = document.querySelector(".header");

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".navbar a");

  console.log(navLinks);

  window.onscroll = () => {
    let scrollPos = window.scrollY;

    sections.forEach((sec) => {
      let top = sec.offsetTop - 100;
      let bottom = top + sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        document
          .querySelector(".navbar a[href='#" + id + "']")
          .classList.add("active");
      }
    });
  };

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // Smooth scrolling
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let targetId = link.getAttribute("href");
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
