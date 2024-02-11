import * as basicLightbox from 'basiclightbox';
const modalBtn = document.querySelector('.header__button');

modalBtn.addEventListener('click', openModal);
const instance = basicLightbox.create(
  `
<div
  style="
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 50px 0 50px;
  "
>
  <img src="./img/ex2.jpg" width="300" height="400" alt="example" />
  <img src="./img/ex3.jpg" width="300" height="400" alt="example" />
  <img src="./img/ex4.jpg" width="300" height="400" alt="example" />
  <img src="./img/ex5.jpg" width="300" height="400" alt="example" />
  <img src="./img/ex6.jpg" width="300" height="400" alt="example" />
  <img src="./img/ex7.jpg" width="300" height="400" alt="example" />
</div>
`,
  {
    onShow: instance => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: instance => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function openModal(event) {
  instance.show();
  const box = document.querySelector('.basicLightbox');
  box.addEventListener('click', () => instance.close());
}

function onEscKeyPress(e) {
  if (e.code !== 'Escape') return;
  instance.close();
}
