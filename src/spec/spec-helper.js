import '@testing-library/jest-dom'

export function getMarkupDOM() {
  const div = document.createElement('div')
  div.innerHTML = `
    <div id="test-carousel"></div>
  `
  return div
}

export function getCarouselDOM() {
  return document.body.innerHTML = `
    <div id="whirli-carousel">
      <div data-testid="slide-one" class="whirli-slide whirli-slide--1" aria-label="slide 1 of 3" aria-hidden="false">
        <h2>sldie one</h2>
      </div>
      <div data-testid="slide-two" class="whirli-slide whirli-slide--2" aria-label="slide 2 of 3" aria-hidden="true">
        <h2>sldie two</h2>
      </div>
      <div data-testid="slide-three" class="whirli-slide whirli-slide--3" aria-label="slide 3 of 3" aria-hidden="true">
        <h2>sldie three</h2>
      </div>
      <button class="whirli-button whirli-button--prev" aria-label="no previous slide available" aria-disabled="true">Previous Slide</button>
      <button class="whirli-button whirli-button--next" aria-label="next slide">Next Slide</button>
      <nav class="whirli-dot-nav">
        <button class="whirli-dot" data-slide="whirli-slide--1" aria-label="navigate to slide 1">Go to slide one</button>
        <button class="whirli-dot" data-slide="whirli-slide--2" aria-label="navigate to slide 2">Go to slide two</button>
        <button class="whirli-dot" data-slide="whirli-slide--3" aria-label="navigate to slide 3">Go to slide three</button>
      </nav>
    </div>
  `
}
