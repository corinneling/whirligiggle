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
            return `
                <button class="whirli-dot" data-slide="whirli-slide--${slideIndex}" aria-label="navigate to slide ${slideIndex}"></button>
              `;
            }).join('')}
        </nav>`
      : ''}
  `
}

export function addMarkupToPage(elementId, data) {
  document.querySelector(`#${elementId}`).innerHTML = `${carouselMarkup(data)}`;
}
