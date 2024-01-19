var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

function toggleAnimation() {
  var object1 = document.querySelector('.__close');
  var object2 = document.querySelector('.sidebarmenu');
  var object3 = document.querySelector('.icon');
 
  
  object1.classList.toggle('active');
  object2.classList.toggle('active');
  object3.classList.toggle('active');
  
}