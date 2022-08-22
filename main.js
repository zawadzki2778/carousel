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
  width = document.querySelector('.carousel__container').offsetWidth;// узнаём ширину блока carousel__container
  console.log(width);

  slider.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.width = 'auto'; //принудительно ставим высоту картинок авто 
  });
  rollSlider();
}
window.addEventListener('resize', size);
size();

function rollSlider() {
  slider.style.transform = 'translate(-' + counter * width + 'px)';
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
  //
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  slider.classList.add('transformAnimation');// добавили класс, прописанный в style.css
  rollSlider();
});



