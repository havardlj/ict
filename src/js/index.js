import objectFitImages from 'object-fit-images';
window.addEventListener('DOMContentLoaded', objectFitImages);

import './utils.exec';
import 'lazysizes';
import Swiper from 'swiper';
/* import 'accordion.exec'; */
/* import ScrollOut from 'scroll-out'; */

var $swiper = new Swiper ('.swiper-container', {
  slidesPerView: 'auto'
  /* Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  }, */
})


/*var headroom  = new Headroom($('header')[0]);
headroom.init();*/

/*
ScrollOut({
  targets: '[data-scroll]',
  cssProps: true
});
ScrollOut({
  // cssProps don't work with once
  once: true,
  targets: '[data-scroll-once]'
});
*/
