const hamburgerBtn = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector(".nav-toggled");
const navOpenIcon = document.querySelector(".nav-toggle-open");
const navCloseIcon = document.querySelector(".nav-toggle-close");
var ariaExpandedValue = document.querySelector(".hamburger-icon").getAttribute("aria-expanded");

hamburgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hide-to-left");
  mobileNav.classList.toggle("opacity-zero");
  navOpenIcon.classList.toggle("display-none");
  navCloseIcon.classList.toggle("display-none");

  if(ariaExpandedValue == "true") {
    ariaExpandedValue = "false"
  } else {
    ariaExpandedValue = "true"
  }
  
  document.querySelector(".hamburger-icon").setAttribute("aria-expanded", ariaExpandedValue)
})
