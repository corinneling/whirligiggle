let xDown;

const handleTouchStart = (e) => {
  e.preventDefault();
  xDown = e.touches[0].clientX;
}

const handleTouchMove = (e) => {
  e.preventDefault();
  const visibleSlide = document.querySelector('.whirli-slide[aria-hidden="true"]');
  const slideWidth = visibleSlide.offsetWidth;


  if ( !xDown ) return;

  const xUp = e.touches[0].clientX;                                    
  const xDiff = xDown - xUp;

  xDiff > 0 ? console.log(e.touches[0], 'right') : console.log(e.touches[0], 'left');

  xDown = null;
}

export function handleTouch(sliderId) {
  const slider = document.getElementById(sliderId);
  console.log(slider);
  slider.addEventListener('touchstart', handleTouchStart, false);        
  slider.addEventListener('touchmove', handleTouchMove, false);
}
