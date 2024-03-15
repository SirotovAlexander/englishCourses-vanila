const buttonOpen = document.querySelector('#menu-open');
const burgerMenue = document.querySelector('.burger-menu');

buttonOpen.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.checked) {
    burgerMenue.classList.add('js-burgerMenue-open');
  } else {
    burgerMenue.classList.remove('js-burgerMenue-open');
  }
}
