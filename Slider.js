const slide = document.getElementsByClassName('image');
const nextSlide = document.querySelector('.next');
const prevSlide = document.querySelector('.prev');
const total = slide.length;
let index = 0;
function next(move) {
  if (move === 'next') {
    index += 1;
    if (index === total) {
      index = 0;
    }
  } else {
    if (index === 0) {
      index = total - 1;
    } else {
      index -= 1;
    }
  }
  for (let i = 0; i < slide.length; i += 1) {
    slide[i].classList.remove('active');
  }
  slide[index].classList.add('active');
}

nextSlide.onclick = function () {
  next('next');
  console.log('clicked');
};
prevSlide.onclick = function () {
  next('prev');
  console.log('click');
};
