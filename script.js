"use strict";

function searchBar() {
  document.querySelector(".search_btn").addEventListener("click", function () {
    document.querySelector(".search").classList.toggle("show");
  });
}

searchBar();
function navMenu() {
  document.querySelector("#drop").addEventListener("click", function () {
    document.querySelector(".nav_list").classList.toggle("show");
  });
}

navMenu();
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (scrolled > 210) {
    document.querySelector(".home_content").classList.add("show");
  }
  if (scrolled > 550) {
    document.querySelector(".offers").classList.add("show");
  }
  if (scrolled > 950) {
    document.querySelector(".menu_grid").classList.add("show");
  }
  if (scrolled > 2000) {
    document.querySelector(".about_container").classList.add("show");
  }
  if (scrolled > 2750) {
    document.querySelector(".reviews_container").classList.add("show");
  }
  if (scrolled > 3400) {
    document.querySelector(".contacts_container").classList.add("show");
  }
  if (scrolled > 4400) {
    document.querySelector(".blog_container").classList.add("show");
  }
  console.log(scrolled);
});
