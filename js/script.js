
'use strict';

// modal variables
//const modal = document.querySelector('[data-modal]');
//const modalCloseBtn = document.querySelector('[data-modal-close]');
//const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
//const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
//modalCloseOverlay.addEventListener('click', modalCloseFunc);
//modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
//const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
//const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
//const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
//const overlay = document.querySelector('[data-overlay]');

//for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
 // const mobileMenuCloseFunc = function () {
    //mobileMenu[i].classList.remove('active');
   // overlay.classList.remove('active');
  //}

 // mobileMenuOpenBtn[i].addEventListener('click', function () {
   // mobileMenu[i].classList.add('active');
   // overlay.classList.add('active');
 // });

 // mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
 // overlay.addEventListener('click', mobileMenuCloseFunc);

//}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
// script.js

    var countdownTime = 5 * 60 * 60; // 5 hours in seconds

    function updateCountdown() {
        var hours = Math.floor(countdownTime / 3600);
        var minutes = Math.floor((countdownTime % 3600) / 60);
        var seconds = countdownTime % 60;

        animateChange('.hours', hours.toString().padStart(2, '0'));
        animateChange('.minutes', minutes.toString().padStart(2, '0'));
        animateChange('.seconds', seconds.toString().padStart(2, '0'));

        countdownTime--;
        if (countdownTime < 0) {
            countdownTime = 5 * 60 * 60; // Reset to 5 hours
        }
    }

    function animateChange(selector, newValue) {
        var element = $(selector);
        var currentValue = element.text();
        if (currentValue !== newValue) {
            var parent = element.parent();
            parent.css('transform', 'rotateX(-180deg)');
            setTimeout(function() {
                element.text(newValue);
                parent.css('transform', 'rotateX(0deg)');
            }, 300); // Change the value halfway through the rotation
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();


