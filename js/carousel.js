console.log('js is working');

const track          =  $('.carousel_track')[0];
const slides         =  track.children;
const nextButton     =  $('.carousel_button--right');
const previousButton =  $('.carousel_button--left');
const dotsNav        =  $('.carousel_nav');
const dots           =  dotsNav.children;

const slideWidth = slides[0].getBoundingClientRect().width;

const slidesArray = Array.from(slides);
slidesArray.forEach((slide,index) =>{
  slides[index].style.left= slideWidth * index + 'px';
});
/*
nextButton.addEventListener('click',event =>{
  const currentSlide=$('.carousel_track').find('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;

  track.style.transform = 'translate(- ' + amountToMove +')';
  currentSlide.classList.remove('current-slide');
  nextSlide.classList.add('current-slide');
});
*/

const moveToSlide = (track,currentSlide,targetSlide)=>{
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.removeClass('current-slide');
  targetSlide.classList.add('current-slide');
}
/*
nextButton.click(function(){
  const currentSlide=$('.carousel_track').find('.current-slide');
  const nextSlide = currentSlide.next()[0];
  const amountToMove = nextSlide.style.left;
  track.style.transform = 'translateX(-' + amountToMove + ')';
  currentSlide.removeClass('current-slide');
  nextSlide.classList.add('current-slide');
});
*/

nextButton.click(function(){
  const currentSlide=$('.carousel_track').find('.current-slide');
  const nextSlide = currentSlide.next()[0];
  moveToSlide(track,currentSlide,nextSlide);
});


previousButton.click(function(){
  const currentSlide=$('.carousel_track').find('.current-slide');
  const previousSlide = currentSlide.prev()[0];
  moveToSlide(track,currentSlide,previousSlide);
});

