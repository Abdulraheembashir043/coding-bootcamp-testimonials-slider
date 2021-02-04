const button = document.querySelectorAll('.button');
const container = document.querySelector('.wrapper');

button.forEach(but => {
  but.addEventListener('click', () => {
    container.classList.toggle('change');
  })
})