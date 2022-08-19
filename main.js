window.addEventListener('load', () => {
  //кнопки
  const left = document.querySelector('.btn-left');
  const right = document.querySelector('.btn-right');
  //carousel
  const slider = document.querySelector('.carousel__slide');
  const images = document.querySelectorAll('.carousel__slide img');//получаем все картинки
  // счётчики 
  let counter = 0;
  const stepSize = images[0].clientWidth;// узнаём размер области внутри рамок элемента что бы получить шаг прокрутки 
  console.log(stepSize);




















})