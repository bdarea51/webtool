// nav js here
var navHamBtn = document.getElementById("nav-ham-btn");
var navBtns = document.getElementById("nav-btns");
navHamBtn.onclick = onhamclick;
function onhamclick() {
    navBtns.style.height = "140px";
    navHamBtn.onclick = onhamclick1;
}
function onhamclick1() {
    navBtns.style.height = "0";
    navHamBtn.onclick = onhamclick;
}
// reload js
function load() {location.reload();}
// alert header model box 
let alertCloseBTN = document.getElementById("alert-model-close");
let alertModel = document.getElementById("alert-model");
alertCloseBTN.addEventListener("click",function(){alertModel.style.display = "none";});