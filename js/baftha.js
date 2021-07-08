const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const body = document.querySelector('body');

menu.addEventListener('click', () => {
  body.classList.add('active');
});

close.addEventListener('click', () => {
    body.classList.remove('active');
});