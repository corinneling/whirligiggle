function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function lazyLoadImages() {
  var lazyImages = document.querySelectorAll('.whirli-slide.whirli-lazy-img');

  if (typeof IntersectionObserver === 'undefined') {
    lazyImages.forEach(function (image) {
      image.classList.remove('whirli-lazy-img');
    });
    return;
  }

  var imageObs = new IntersectionObserver(function (entries, observe) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var image = entry.target;
        image.classList.remove('whirli-lazy-img');
        imageObs.unobserve(image);
      }
    });
  });
  lazyImages.forEach(function (slideImage) {
    imageObs.observe(slideImage);
  });
}

var carouselMarkup = function carouselMarkup(data) {
  var numberOfSlides = data.slides.length;
  return "\n    ".concat(data.slides.map(function (slide, i) {
    var slideIndex = i + 1;
    return "\n        <div class=\"whirli-slide whirli-slide--".concat(slideIndex, " whirli-lazy-img\" aria-label=\"slide ").concat(slideIndex, " of ").concat(numberOfSlides, "\" aria-hidden=\"").concat(slideIndex === 1 ? false : true, "\">\n          ").concat(slide.content, "\n        </div>\n      ");
  }).join(''), "\n      \n      ").concat(data.showButtons ? "<button class=\"whirli-button whirli-button--prev\" aria-label=\"no previous slide available\" aria-disabled=\"true\"></button>\n      <button class=\"whirli-button whirli-button--next\" aria-label=\"next slide\"></button>" : '', "\n\n      ").concat(data.showDots ? "<nav class=\"whirli-dot-nav\">\n          ".concat(data.slides.map(function (slide, i) {
    var slideIndex = i + 1;
    var dotAria = slideIndex === 1 ? "slide ".concat(slideIndex, " selected") : "go to slide ".concat(slideIndex);
    var selected = slideIndex === 1 ? 'whirli-dot--selected' : '';
    return "\n              <button class=\"whirli-dot ".concat(selected, "\" data-slide=\"whirli-slide--").concat(slideIndex, "\" aria-label=\"").concat(dotAria, "\"></button>\n            ");
  }).join(''), "\n        </nav>") : '', "\n  ");
};

function addMarkupToPage(elementId, data) {
  document.querySelector("#".concat(elementId)).innerHTML = "".concat(carouselMarkup(data));
}

var disableButtons = function disableButtons(index, slides) {
  var prev = document.querySelector('.whirli-button--prev');
  var next = document.querySelector('.whirli-button--next');
  var lastSlideIndex = slides.length - 1;
  var firstSlideIndex = 0;

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

var setDots = function setDots(index, dots, originalIndex) {
  dots[originalIndex].setAttribute('aria-label', "go to slide ".concat(originalIndex));
  dots[originalIndex].classList.remove('whirli-dot--selected');
  dots[index].setAttribute('aria-label', "slide ".concat(index, " selected"));
  dots[index].classList.add('whirli-dot--selected');
};

var getCurrentIndex = function getCurrentIndex(slides) {
  var originalIndex;
  slides.forEach(function (slide, index) {
    var hiddenAttribute = slide.getAttribute('aria-hidden');
    if (hiddenAttribute === 'false') originalIndex = index;
  });
  return originalIndex;
};

var activateSlide = function activateSlide(slideToActivate, slides, originalIndex) {
  var arrows = document.querySelectorAll('.whirli-button');
  var dots = document.querySelectorAll('.whirli-dot');

  if (slideToActivate !== undefined) {
    // hide current slide
    slides[originalIndex].setAttribute('aria-hidden', true);
    slides[originalIndex].removeAttribute('tabindex'); // make sure links on slide that will be hidden are not tabbable

    var slideLink = slides[originalIndex].querySelector('a');
    if (slideLink) slideLink.setAttribute('tabindex', '-1'); // disable buttons if needed

    var activeIndex = slides.indexOf(slideToActivate);
    if (dots.length > 0) setDots(activeIndex, dots, originalIndex);
    if (arrows.length > 0) disableButtons(activeIndex, slides); // set active slide

    var activeSlideLink = slideToActivate.querySelector('a');
    if (activeSlideLink) activeSlideLink.setAttribute('tabindex', '0');
    slideToActivate.setAttribute('aria-hidden', false);
    slideToActivate.setAttribute('tabindex', 0);
    slideToActivate.focus();
  }
};

var navigateWithDots = function navigateWithDots(e) {
  var slides = document.querySelectorAll('.whirli-slide');
  var originalIndex = getCurrentIndex(slides);
  var slideClass = e.target.getAttribute('data-slide');
  var slideToActivate = document.querySelector(".".concat(slideClass));
  activateSlide(slideToActivate, slides, originalIndex);
};

var navigateWithButtons = function navigateWithButtons(e) {
  var slides = document.querySelectorAll('.whirli-slide');
  var originalIndex = getCurrentIndex(slides);
  var slideToActivate = e.target.classList.contains('whirli-button--next') ? slides[originalIndex + 1] : e.target.classList.contains('whirli-button--prev') ? slides[originalIndex - 1] : null;
  activateSlide(slideToActivate, slides, originalIndex);
};

function handleButtonNavigation() {
  var sliderButtons = document.querySelectorAll('.whirli-button');
  console.log(_typeof(sliderButtons), 'typeeee');
  sliderButtons.forEach(function (button) {
    button.addEventListener('click', navigateWithButtons);
  });
}

function handleDotNavigation() {
  var dots = document.querySelectorAll('.whirli-dot');
  dots.forEach(function (dot) {
    dot.addEventListener('click', navigateWithDots);
  });
}

function setSlideLinkTabindex() {
  // make sure link on slides that are not showing are not tabbable
  var slides = document.querySelectorAll('.whirli-slide');
  slides.forEach(function (slide) {
    var slideLink = slide.querySelector('a');
    if (slideLink) slideLink.setAttribute('tabindex', '-1');
  }); // make sure link on first slide are tabbable

  var firstSlideLink = slides[0].querySelector('a');
  if (firstSlideLink) firstSlideLink.setAttribute('tabindex', '0');
}

function init(elementId, data) {
  addMarkupToPage(elementId, data);
  if (data.showButtons) handleButtonNavigation();
  if (data.showDots) handleDotNavigation();
  setSlideLinkTabindex();
  lazyLoadImages();
}

export { init };
