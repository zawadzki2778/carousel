//кнопки
const left = document.querySelector('.btn-left');
const right = document.querySelector('.btn-right');
//carousel
const slider = document.querySelector('.carousel__slide');
const images = document.querySelectorAll('.carousel__slide .carousel__img');//получаем все картинки
console.log(images);
// счётчики 
let counter = 0;
let width;

function size() {
  console.log('resize');
  width = document.querySelector('.carousel__container').clientWidth;// узнаём ширину блока carousel__container
  console.log(width);

  slider.style.width = width * images.length + 'px'; // присваиваем слайдеру значение равное его ширине умноженное на к-во картинок
  images.forEach(item => {//делаем все изображения равные ширине слайдера, т.е. ставим картинки в рамку (border: 3px solid royalblue;)
    item.style.width = width + 'px';
    item.style.height = 'auto'; //принудительно ставим высоту картинок 'авто'
  });
  rollSlider();
}
window.addEventListener('resize', size);//вешаем событие(resize),которое будет срабатывать при изменении размеров картинки и вызывать ф-ию size;
// и при изменении размеров страницы картинка будет адаптироваться 
size();

function rollSlider() { // ф-ия, отвечающая за рисование смещения 
  slider.style.transform = 'translate(-' + counter * width + 'px)'; //translate(-' это строка к которой прибавили count * width и к ним прибавили строку 'px)'
}

//пишем код реализацмии для правой стрелки
right.addEventListener('click', () => {
  //прописываем условие для конечной точки прокрутки и возврата её в начало 
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  slider.classList.add('transformAnimation');// добавили класс, прописанный в style.css
  rollSlider();
});

// для левой стрелки
left.addEventListener('click', () => {
  
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  slider.classList.add('transformAnimation');// добавили класс, прописанный в style.css
  rollSlider();
});



