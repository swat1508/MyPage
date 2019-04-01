console.log('js is working');

const track          =  $('.carousel_track')[0];
const slides         =  track.children;
const nextButton     =  $('.carousel_button--right');
const previousButton =  $('.carousel_button--left');
const dotsNav        =  $('.carousel_nav');
const dots           =  $(dotsNav).children();

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

const updateDots = (currentDot,targetDot)=>{
$(currentDot).removeClass('current-slide')
$(targetDot).addClass('current-slide');
}

const showHideArrow = (slides,previousButton,nextButton,targetIndex)=>{
        if(targetIndex===0){
        previousButton.addClass('isHidden');
        nextButton.removeClass('isHidden');
        }else if(targetIndex === slides.length-1){
          previousButton.removeClass('isHidden');
          nextButton.addClass('isHidden');
        }else{
          previousButton.removeClass('isHidden');
          nextButton.removeClass('isHidden');
        }
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

  const currentDot = $(dotsNav).find('.current-slide');
  const nextDot = $(currentDot).next();
  const nextIndex = Array.from($(slides)).findIndex(slide => slide === nextSlide);
  
  moveToSlide(track,currentSlide,nextSlide);
  updateDots(currentDot , nextDot);
  showHideArrow(slides,previousButton,nextButton,nextIndex);
});


previousButton.click(function(){
  const currentSlide=$('.carousel_track').find('.current-slide');
  const previousSlide = currentSlide.prev()[0];

  const currentDot = $(dotsNav).find('.current-slide');
  const prevDot = $(currentDot).prev();
  const prevIndex = Array.from($(slides)).findIndex(slide => slide === previousSlide);
  
  moveToSlide(track,currentSlide,previousSlide);
  updateDots(currentDot , prevDot);
  showHideArrow(slides,previousButton,nextButton,prevIndex);

});


dotsNav.click(function(e){
const targetDot = e.target.closest('button');
const currentSlide=$(track).find('.current-slide');
const currentDot=$(dotsNav).find('.current-slide');

const targetIndex = Array.from($(dots)).findIndex(dot => dot===targetDot);
const targetSlide=slides[targetIndex];
moveToSlide(track,currentSlide,targetSlide);
updateDots(currentDot , targetDot);

showHideArrow(slides,previousButton,nextButton,targetIndex);
});
