const disableButtons = (index, slides) => {
  const prev = document.querySelector('.whirli-button--prev');
  const next = document.querySelector('.whirli-button--next');

  const lastSlideIndex = slides.length - 1;
  const firstSlideIndex = 0;

  if (index === lastSlideIndex) {
    next.setAttribute('aria-disabled', true);
    next.setAttribute('aria-label', 'no next slide available');
  } else if (index === firstSlideIndex) {
    prev.setAttribute('aria-disabled', true);
    prev.setAttribute('aria-label', 'no previous slide available');
  } else {
    next.removeAttribute('aria-disabled');
    prev.removeAttribute('aria-disabled');
    next.setAttribute('aria-label', 'next slide');
    prev.setAttribute('aria-label', 'previous slide');
  }
}

const getCurrentIndex = (slides) => {
  let currentIndex;
  slides.forEach((slide, index) => {
    const hiddenAttribute = slide.getAttribute('aria-hidden');
    if (hiddenAttribute === 'false') currentIndex = index
  });
  return currentIndex;
}

const activateSlide = (slideToActivate, slides, currentIndex) => {
  if (slideToActivate !== undefined) {
    // hide current slide
    slides[currentIndex].setAttribute('aria-hidden', true);
    slides[currentIndex].removeAttribute('tabindex');

    // make sure links on slide that will be hidden are not tabbable
    const slideLink = slides[currentIndex].querySelector('a');
    if (slideLink) slideLink.setAttribute('tabindex', '-1')

    // disable buttons if needed
    const activateIndex = [...slides].indexOf(slideToActivate);
    disableButtons(activateIndex, slides);

    // set active slide
    const activeSlideLink = slideToActivate.querySelector('a');
    if(activeSlideLink) activeSlideLink.setAttribute('tabindex', '0')
    slideToActivate.setAttribute('aria-hidden', false);
    slideToActivate.setAttribute('tabindex', 0);
    slideToActivate.focus()
  } 
}

const navigateWithDots = (e) => {
  const slides = document.querySelectorAll('.whirli-slide');
  const currentIndex = getCurrentIndex(slides)
  const slideClass = e.target.getAttribute('data-slide');
  const slideToActivate = document.querySelector(`.${slideClass}`);

  activateSlide(slideToActivate, slides, currentIndex);
}

const navigateWithButtons = (e) => {
  const slides = document.querySelectorAll('.whirli-slide');
  const currentIndex = getCurrentIndex(slides)
  const slideToActivate = e.target.classList.contains('whirli-button--next')
    ? slides[currentIndex + 1]
    : e.target.classList.contains('whirli-button--prev')
      ? slides[currentIndex - 1]
      : null;

  activateSlide(slideToActivate, slides, currentIndex);
}

export function handleButtonNavigation() {
  const sliderButtons = document.querySelectorAll('.whirli-button');
  sliderButtons.forEach((button) => {
    button.addEventListener('click', navigateWithButtons)
  });
}

export function handleDotNavigation() {
  const dots = document.querySelectorAll('.whirli-dot');
  dots.forEach((dot) => {
    dot.addEventListener('click', navigateWithDots)
  });
}

export function setSlideLinks() {
  // make sure link on slides that are not showing are not tabbable
  const slides = document.querySelectorAll('.whirli-slide');
  slides.forEach((slide) => {
    const slideLink = slide.querySelector('a');
    if (slideLink) slideLink.setAttribute('tabindex', '-1');
  })

  // make sure link on first slide are tabbable
  const firstSlideLink = slides[0].querySelector('a');
  if (firstSlideLink) firstSlideLink.setAttribute('tabindex', '0')
}
