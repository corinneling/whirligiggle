export const carouselMarkup = (data) => {
  const numberOfSlides = data.slides.length;

  return `
    ${data.slides.map(function(slide, i) {
      const slideIndex = i + 1;
      return `
        <div class="whirli-slide whirli-slide--${slideIndex} whirli-lazy-img" aria-label="slide ${slideIndex} of ${numberOfSlides}" aria-hidden="${slideIndex === 1 ? false : true}">
          ${slide.content}
        </div>
      `;
      }).join('')}
      
      ${data.showButtons ? 
      `<button class="whirli-button whirli-button--prev" aria-label="no previous slide available" aria-disabled="true"></button>
      <button class="whirli-button whirli-button--next" aria-label="next slide"></button>`
      : ''}

      ${data.showDots ?
        `<nav class="whirli-dot-nav">
          ${data.slides.map(function(slide, i) {
            const slideIndex = i + 1;
            const dotAria = slideIndex === 1 ? `slide ${slideIndex} selected` : `go to slide ${slideIndex}`;
            const selected = slideIndex === 1 ? 'whirli-dot--selected' : '';
            return `
              <button class="whirli-dot ${selected}" data-slide="whirli-slide--${slideIndex}" aria-label="${dotAria}"></button>
            `;
            }).join('')}
        </nav>`
      : ''}
  `
}

export function addMarkupToPage(elementId, data) {
  document.querySelector(`#${elementId}`).innerHTML = `${carouselMarkup(data)}`;
}
