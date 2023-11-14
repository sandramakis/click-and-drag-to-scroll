"use strict";

const slider = document.querySelector(".items");
let isDown = false;
let startX; //the point where it is pressed down
let scrollLeft; // distance btw the start and the scrolled

// on mouse down
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  //the point of scroll on the page - offsetLeft of the slider(to avoid extra spaces in the future)
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(startX);
});

// on mouseleave
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

// on mouseup
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

// on mousemove
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; //don't do anything
  e.preventDefault();

  const x = e.pageX - slider.offsetLeft; //the point of scroll as it's moving
  console.log({ x, startX });
  const walk = (x - startX)*3;
  slider.scrollLeft = scrollLeft - walk; //update the scroll slider
});
