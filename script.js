let hamburger = document.getElementById("hamburger");
let close = document.getElementById("close");
let menu = document.getElementById("menu");
let product = document.getElementById("product");
let company = document.getElementById("company");
let connect = document.getElementById("connect");
let subproduct = document.getElementById("subproduct");
let subcompany = document.getElementById("subcompany");
let subconnect = document.getElementById("subconnect");

function showMenu() {
  hamburger.classList.toggle("hidden");
  close.classList.toggle("hidden");
  menu.style.display = "block";
}
function hideMenu() {
  hamburger.classList.toggle("hidden");
  close.classList.toggle("hidden");
  menu.style.display = "none";
  if (!subproduct.classList.contains("hidden")) {
    subproduct.classList.add("hidden");
  }
  if (!subcompany.classList.contains("hidden")) {
    subcompany.classList.add("hidden");
  }
  if (!subconnect.classList.contains("hidden")) {
    subconnect.classList.add("hidden");
  }
}
function toggleProduct() {
  subproduct.classList.toggle("hidden");
  if (!subcompany.classList.contains("hidden")) {
    subcompany.classList.add("hidden");
  }
  if (!subconnect.classList.contains("hidden")) {
    subconnect.classList.add("hidden");
  }
}
function toggleCompany() {
  subcompany.classList.toggle("hidden");
  if (!subproduct.classList.contains("hidden")) {
    subproduct.classList.add("hidden");
  }
  if (!subconnect.classList.contains("hidden")) {
    subconnect.classList.add("hidden");
  }
}
function toggleConnect() {
  subconnect.classList.toggle("hidden");
  if (!subproduct.classList.contains("hidden")) {
    subproduct.classList.add("hidden");
  }
  if (!subcompany.classList.contains("hidden")) {
    subcompany.classList.add("hidden");
  }
}

function switchScreen(x) {
  x.matches ? (menu.style.display = "flex") : (menu.style.display = "none");
}
var x = window.matchMedia("(min-width:1024px)");

switchScreen(x);

x.addEventListener("change", function () {
  switchScreen(x);
});
