// Burger Menu

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    document.body.style.backgroundColor = "rgba(39, 39, 39, 0.255)";
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    document.body.style.backgroundColor = "var(--White)";
  });
}

// Remove Menu Mobile //

const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Change Background Header */

const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 100
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

// Content Change //

const slider1 = document.getElementById("slider-1");
const slider2 = document.getElementById("slider-2");
const slider3 = document.getElementById("slider-3");

const sliders = [slider1, slider2, slider3];
let sliderIndex = 0;

function showSlider(index) {
  sliders.forEach((slider, i) => {
    if (i === index) {
      slider.style.display = "flex";
    } else {
      slider.style.display = "none";
    }
  });
}

function handleSliderClick(event, direction) {
  event.preventDefault();
  if (direction === "right") {
    sliderIndex = (sliderIndex + 1) % sliders.length;
  } else if (direction === "left") {
    sliderIndex = (sliderIndex - 1 + sliders.length) % sliders.length;
  }
  showSlider(sliderIndex);
}

sliders.forEach((slider) => {
  const leftHandle = slider.querySelector(".left-handle");
  const rightHandle = slider.querySelector(".right-handle");

  if (rightHandle) {
    rightHandle.addEventListener("click", (event) => {
      handleSliderClick(event, "right");
    });
  }

  if (leftHandle) {
    leftHandle.addEventListener("click", (event) => {
      handleSliderClick(event, "left");
    });
  }
});
