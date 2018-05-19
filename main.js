const loadScreen = document.getElementById('load-screen');
const openMenuBtn = document.getElementById('menu-open');
const closeMenuBtn = document.getElementById('menu-close');
const navList = document.getElementById('nav-list');
const socialIcons = document.getElementById('icons');
const listItems = document.querySelectorAll('nav li');
const navItems = document.querySelectorAll('nav a');
const lrgLogo = document.getElementById('logo-lrg');
const form = document.getElementById('contact-form');
const contactButton = document.getElementById('contact-link');
const formClose = document.getElementById('form-close');
const homeBg = document.getElementById('home-bg');
var w = window.innerWidth;

let i = 0;

$(document).ready(function() {

  window.onload = function() {
  loadScreen.style.display = "none";

  for(let i = 0; i < navItems.length; i++) {
    $(navItems[i]).addClass('slide');
  };
  $(lrgLogo).addClass('open');
  };





openMenuBtn.onclick = function () {
  if (form.className == "open") {
    //Shrink box
    form.className = "";
  }
  $(navList).addClass('open');
  $(icons).addClass('open');
 $(closeMenuBtn).removeClass('animated', 'fadeOut');
  $(closeMenuBtn).addClass('animated', 'flipInX');
  for(let i = 0; i < listItems.length; i++) {
    $(listItems[i]).addClass('open');
};


};

closeMenuBtn.onclick = function () {
  for(let i = 0; i < listItems.length; i++) {
    $(listItems[i]).removeClass('open');
}
$(closeMenuBtn).addClass('animated', 'fadeOut');
 $(closeMenuBtn).removeClass('animated', 'flipInX');
 $(navList).removeClass('open');
 $(icons).removeClass('open');

};



// ---------------------------------CONTACT WINDOW-----------------------------


contactButton.onclick = function() {
   $(navList).removeClass('open');
  if (form.className == "open") {
    //Shrink box
    form.className = "";

  } else {
    //Expand box
    form.className = "open";


  };
};
formClose.onclick = function() {

  if (form.className == "open") {
    //Shrink box
    form.className = "";

  } else {
    //Expand box
    form.className = "open";


  };
};

// Parallax scrolling--------------------------------------------
if ($(window).width() >= 700) {
  console.log('wide');

  $(window).scroll(function() {

      let wScroll = $(this).scrollTop();




      if(wScroll >= $(homeBg).offset().top) {
        $(homeBg).css({'background-position':'center '+(wScroll * -0.3)+'px'});
      };


    });

};


});
