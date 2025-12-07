const Page = document.querySelector("#page");
const Drop_menu = document.querySelector(".drop_menu");
const Drop_menu1 = document.querySelector(".drop_menu1");

Page.addEventListener("click", () => {
  Drop_menu.classList.toggle("drop_menu");
  Drop_menu.classList.toggle("drop_menu1");
});

window.addEventListener("click", (e) => {
  if (!Page.contains(e.target) && !Drop_menu.contains(e.target)) {
    Drop_menu.classList.remove("drop_menu1");
    Drop_menu.classList.add("drop_menu");
  }
});

// Side Bar
const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.querySelector(".close-btn");
const dropdowns = document.querySelector(".dropdownArrow");
const dropdown1 = document.querySelector(".dropdownArrow1");
const subMenu = document.querySelector(".submenu");
const subMenu2 = document.querySelector(".submenu2");

// Open sidebar
hamburger.addEventListener("click", () => {
  sidebar.style.width = "100%";
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.style.width = "0";
});

// Toggle submenus

dropdowns.addEventListener("click", () => {
  subMenu.classList.toggle("submenu");
  subMenu.classList.toggle("submenu1");
});

// dropdown1.addEventListener("click", () => {
//   subMenu2.classList.toggle("submenu2");
//   subMenu2.classList.toggle("submenu1");
// });
