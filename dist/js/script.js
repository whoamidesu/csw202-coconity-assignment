let slidesPerView = 1;
function handleResize() {
  if (window.innerWidth > 768) {
    slidesPerView = 3;
  } else {
    slidesPerView = 1;
  }
}


// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const list = document.querySelectorAll("#list");
  const logo = document.querySelector("#logo");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    list.forEach((item) => {
        item.classList.add("black");
        item.classList.add("scrolled-hover");
    });
    logo.classList.add("invert");
    hamburger.classList.add("invert");
    
  } else {
    header.classList.remove("navbar-fixed");
    list.forEach((item) => {
        item.classList.remove("black");
        item.classList.remove("scrolled-hover");
    });
    logo.classList.remove("invert");
    hamburger.classList.remove("invert");
  }
};

const rectangle = document.querySelector(".rectangle");
window.addEventListener("scroll", function() {
    if (window.scrollY > 640) {
        rectangle.classList.add("fade-in");
      }
});

