
const menuBtn = document.querySelector('.btn_menu');
const navigationBtn = document.querySelector('.navigation');

menuBtn.addEventListener('click', function () {
  navigationBtn.classList.toggle('active');
});