let htmlBtn = document.getElementById("htmlBtn");
let cssBtn = document.getElementById("cssBtn");
let jsBtn = document.getElementById("jsBtn");
let bsBtn = document.getElementById("bsBtn");
let nodeBtn = document.getElementById("nodeBtn");

let htmlText = document.getElementById("htmlText");
let cssText = document.getElementById("cssText");
let jsText = document.getElementById("jsText");
let bsText = document.getElementById("bsText");
let nodeText = document.getElementById("nodeText");

let box = document.getElementById("box");

htmlBtn.addEventListener("click", function () {
  bsText.style.display = "none";
  cssText.style.display = "none";
  jsText.style.display = "none";
  nodeText.style.display = "none";
  htmlText.style.display = "block";

  this.classList.add("active");

  htmlText.classList.add("animd");

  cssBtn.classList.remove("active");
  jsBtn.classList.remove("active");
  bsBtn.classList.remove("active");
  nodeBtn.classList.remove("active");
});

cssBtn.addEventListener("click", function () {
  htmlText.style.display = "none";
  jsText.style.display = "none";
  bsText.style.display = "none";
  nodeText.style.display = "none";

  cssText.style.display = "block";

  this.classList.add("active");

  cssText.classList.add("animd");

  jsBtn.classList.remove("active");
  bsBtn.classList.remove("active");
  htmlBtn.classList.remove("active");
  nodeBtn.classList.remove("active");
});

jsBtn.addEventListener("click", function () {
  htmlText.style.display = "none";
  cssText.style.display = "none";
  bsText.style.display = "none";
  nodeText.style.display = "none";

  jsText.style.display = "block";

  this.classList.add("active");
  jsText.classList.add("animd");

  cssBtn.classList.remove("active");
  bsBtn.classList.remove("active");
  htmlBtn.classList.remove("active");
  nodeBtn.classList.remove("active");
});

bsBtn.addEventListener("click", function () {
  htmlText.style.display = "none";
  cssText.style.display = "none";
  jsText.style.display = "none";
  nodeText.style.display = "none";
  bsText.style.display = "block";

  this.classList.add("active");

  bsText.classList.add("animd");

  cssBtn.classList.remove("active");
  jsBtn.classList.remove("active");
  htmlBtn.classList.remove("active");
  nodeBtn.classList.remove("active");
});

nodeBtn.addEventListener("click", function () {
  htmlText.style.display = "none";
  cssText.style.display = "none";
  jsText.style.display = "none";
  bsText.style.display = "none";
  nodeText.style.display = "block";

  this.classList.add("active");

  nodeText.classList.add("animd");

  cssBtn.classList.remove("active");
  jsBtn.classList.remove("active");
  htmlBtn.classList.remove("active");
  bsBtn.classList.remove("active");
});

//  ? ========== Auto Typing JS ==========

const menuBtn = document.getElementById("menuBtn");
const navItem = document.getElementById("navItem");
const cancelBtn = document.getElementById("cancelBtn");

menuBtn.addEventListener("click", function () {
  navItem.style.right = "0vw";
});

cancelBtn.addEventListener("click", function () {
  navItem.style.right = "-60vw";
});

//  ? ========== Auto Typing JS ==========

let typed = new Typed("#nmMahabur", {
  strings: ["Designer.", "Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

let typedd = new Typed("#aboutText", {
  strings: ["Freelancer", "Designer", "Developer", "Problem Solver."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

//  ? ========== Sticky Navbar JS ==========

/* 
$(document).ready(function(){
 
  $(document).scroll(function () {
    var sc = $(document).scrollTop();
    if(sc >= 300){
      $("#navbar").addClass("sticky");
      
    }else{
      $("#navbar").removeClass("sticky")
    }
    })

    $(document).scroll(function(){
     
    })


})
 */
