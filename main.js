window.addEventListener('load', () => {
  //кнопки
  const left = document.querySelector('.btn-left');
  const right = document.querySelector('.btn-right');
  //carousel
  const slider = document.querySelector('.carousel__slide');
  const images = document.querySelectorAll('.carousel__slide img');//получаем все картинки
  // счётчики 
  let counter = 0;
  const stepSize = images[0].clientWidth;// узнаём размер области внутри рамок элемента[0],что бы получить шаг прокрутки 
  console.log(stepSize);

  //записываем логику работы прокрутки 
  slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

  //пишем код реализацмии для правой стрелки
  right.addEventListener('click', () => {
    //прописываем условие для конечной точки прокрутки и возврата её в начало 
    if (counter >= images.length - 1) counter = -1;
    slider.classList.add('transformAnimation');// добавили класс, прописанный в style.css
    counter++;
    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
  });
});
