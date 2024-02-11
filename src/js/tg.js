import axios from 'axios';

const callbackForm = document.querySelector('.callback__form');

const TOKEN = '';
const CHAT_ID = '';
const URL_TG = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

callbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let message = `<b>Контактна інформація з сайту</b> \n`;
  if (callbackForm.phone.value === '') {
    return alert('Введіть коректний номер');
  }

  message += `<b>${callbackForm.phone.value}</b>`;

  axios
    .post(URL_TG, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then(res => {
      alert('Наш менеджер зателефонує Вам! Гарного дня');
      callbackForm.phone.value = '';
    })
    .catch(err => console.warn(err.massege));
}
