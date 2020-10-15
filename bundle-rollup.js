'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('.whirli-slide.whirli-lazy-img');
  const imageObs = new IntersectionObserver((entries, observe) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.classList.remove('whirli-lazy-img');
        imageObs.unobserve(image);
      }
    });
  });
  lazyImages.forEach(slideImage => {
    imageObs.observe(slideImage);
  });
}

const carouselMarkup = data => {
  const numberOfSlides = data.slides.length;
  return `
    ${data.slides.map(function (slide, i) {
    const slideIndex = i + 1;
    return `
        <div class="whirli-slide whirli-slide--${slideIndex} whirli-lazy-img" aria-label="slide ${slideIndex} of ${numberOfSlides}" aria-hidden="${slideIndex === 1 ? false : true}">
          ${slide.content}
        </div>
      `;
  }).join('')}
      
      ${data.showButtons ? `<button class="whirli-button whirli-button--prev" aria-label="no previous slide available" aria-disabled="true"></button>
      <button class="whirli-button whirli-button--next" aria-label="next slide"></button>` : ''}

      ${data.showDots ? `<nav class="whirli-dot-nav">
          ${data.slides.map(function (slide, i) {
    const slideIndex = i + 1;
    const dotAria = slideIndex === 1 ? `slide ${slideIndex} selected` : `go to slide ${slideIndex}`;
    const selected = slideIndex === 1 ? 'whirli-dot--selected' : '';
    return `
              <button class="whirli-dot ${selected}" data-slide="whirli-slide--${slideIndex}" aria-label="${dotAria}"></button>
            `;
  }).join('')}
        </nav>` : ''}
  `;
};
function addMarkupToPage(elementId, data) {
  document.querySelector(`#${elementId}`).innerHTML = `${carouselMarkup(data)}`;
}

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
};

const setDots = (index, dots, originalIndex) => {
  dots[originalIndex].setAttribute('aria-label', `navigate to slide ${originalIndex}`);
  dots[originalIndex].classList.remove('whirli-dot--selected');
  dots[index].setAttribute('aria-label', `slide ${index} selected`);
  dots[index].classList.add('whirli-dot--selected');
};

const getCurrentIndex = slides => {
  let originalIndex;
  slides.forEach((slide, index) => {
    const hiddenAttribute = slide.getAttribute('aria-hidden');
    if (hiddenAttribute === 'false') originalIndex = index;
  });
  return originalIndex;
};

const activateSlide = (slideToActivate, slides, originalIndex) => {
  const arrows = document.querySelectorAll('.whirli-button');
  const dots = document.querySelectorAll('.whirli-dot');

  if (slideToActivate !== undefined) {
    // hide current slide
    slides[originalIndex].setAttribute('aria-hidden', true);
    slides[originalIndex].removeAttribute('tabindex'); // make sure links on slide that will be hidden are not tabbable

    const slideLink = slides[originalIndex].querySelector('a');
    if (slideLink) slideLink.setAttribute('tabindex', '-1'); // disable buttons if needed

    const activeIndex = [...slides].indexOf(slideToActivate);
    if (dots.length > 0) setDots(activeIndex, dots, originalIndex);
    if (arrows.length > 0) disableButtons(activeIndex, slides); // set active slide

    const activeSlideLink = slideToActivate.querySelector('a');
    if (activeSlideLink) activeSlideLink.setAttribute('tabindex', '0');
    slideToActivate.setAttribute('aria-hidden', false);
    slideToActivate.setAttribute('tabindex', 0);
    slideToActivate.focus();
  }
};

const navigateWithDots = e => {
  const slides = document.querySelectorAll('.whirli-slide');
  const originalIndex = getCurrentIndex(slides);
  const slideClass = e.target.getAttribute('data-slide');
  const slideToActivate = document.querySelector(`.${slideClass}`);
  activateSlide(slideToActivate, slides, originalIndex);
};

const navigateWithButtons = e => {
  const slides = document.querySelectorAll('.whirli-slide');
  const originalIndex = getCurrentIndex(slides);
  const slideToActivate = e.target.classList.contains('whirli-button--next') ? slides[originalIndex + 1] : e.target.classList.contains('whirli-button--prev') ? slides[originalIndex - 1] : null;
  activateSlide(slideToActivate, slides, originalIndex);
};

function handleButtonNavigation() {
  const sliderButtons = document.querySelectorAll('.whirli-button');
  sliderButtons.forEach(button => {
    button.addEventListener('click', navigateWithButtons);
  });
}
function handleDotNavigation() {
  const dots = document.querySelectorAll('.whirli-dot');
  dots.forEach(dot => {
    dot.addEventListener('click', navigateWithDots);
  });
}
function setSlideLinkTabindex() {
  // make sure link on slides that are not showing are not tabbable
  const slides = document.querySelectorAll('.whirli-slide');
  slides.forEach(slide => {
    const slideLink = slide.querySelector('a');
    if (slideLink) slideLink.setAttribute('tabindex', '-1');
  }); // make sure link on first slide are tabbable

  const firstSlideLink = slides[0].querySelector('a');
  if (firstSlideLink) firstSlideLink.setAttribute('tabindex', '0');
}

function init(elementId, data) {
  addMarkupToPage(elementId, data);
  if (data.showButtons) handleButtonNavigation();
  if (data.showDots) handleDotNavigation();
  setSlideLinkTabindex();
  lazyLoadImages();
  console.log('1');
}

exports.init = init;
