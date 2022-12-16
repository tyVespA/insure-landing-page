const hamburgerBtn = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector(".nav-toggled");
const navOpenIcon = document.querySelector(".nav-toggle-open");
const navCloseIcon = document.querySelector(".nav-toggle-close");

hamburgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hide-to-left");
  navOpenIcon.classList.toggle("display-none")
  navCloseIcon.classList.toggle("display-none")
  // mobileNav.classList.toggle("opacity-zero");
})


// hamburgerBtn.addEventListener("click", () => {
//   console.log(window.getComputedStyle(mobileNav).getPropertyValue("opacity"))
//   if (window.getComputedStyle(mobileNav).getPropertyValue("opacity") == 0.3) {
//     mobileNav.style.cssText = ("opacity: 1");
//     mobileNav.style.cssText = ("left: 0")
//   } 
//   if (window.getComputedStyle(mobileNav).getPropertyValue("opacity") == 0.5){
//     mobileNav.style.cssText = ("opacity: 0");
//     mobileNav.style.cssText = ("left: 100vw")
//   }
  
// })