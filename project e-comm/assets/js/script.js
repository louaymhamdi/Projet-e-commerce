'use strict';



const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}




const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})


// Contact JS
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var Nom = document.getElementById('Nom').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  console.log('Nom:', Nom);
  console.log('Email:', email);
  console.log('Message:', message);
  
  alert('Votre message a été envoyé Mr/Mme ' + Nom +' !');
  document.getElementById('contact-form').reset();
});