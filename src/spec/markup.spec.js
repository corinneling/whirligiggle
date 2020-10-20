import { carouselMarkup } from '../markup';
import { getMarkupDOM } from './spec-helper';

describe('add markup to page', () => {
  const slideData = {
    slides: [{
      content: `<p class="test-paragraph">hello</p>`
    },{
      content: `<a href="#">a link</a>`
    },{
      content: `<h2>sldie three</h2>`
    },{
      content: `<p>another slide</p>`
    }]
  }

  test('does not add dots if there is no showDots key', () => {
    const container = getMarkupDOM();
    const carousel = container.querySelector('#test-carousel');
    carousel.innerHTML = `${carouselMarkup(slideData)}`
    expect(carousel.innerHTML).not.toContain('whirli-dot-nav');
  })

  test('adds dots if showDots key value is true', () => {
    slideData.showDots = true;
    const container = getMarkupDOM();
    const carousel = container.querySelector('#test-carousel');
    carousel.innerHTML = `${carouselMarkup(slideData)}`
    expect(carousel.innerHTML).toContain('whirli-dot-nav');
  })

  test('does not add dots if showDots key value is false', () => {
    slideData.showDots = false;
    const container = getMarkupDOM();
    const carousel = container.querySelector('#test-carousel');
    carousel.innerHTML = `${carouselMarkup(slideData)}`
    expect(carousel.innerHTML).not.toContain('whirli-dot-nav');
  })

  test('does not add arrow buttons if there is no showButtons key', () => {
    const container = getMarkupDOM();
    const carousel = container.querySelector('#test-carousel');
    carousel.innerHTML = `${carouselMarkup(slideData)}`
    expect(carousel.innerHTML).not.toContain('whirli-button');
  })

  test('adds arrow buttons if showButtons key value is true', () => {
    slideData.showButtons = true;
    const container = getMarkupDOM();
    const carousel = container.querySelector('#test-carousel');
    carousel.innerHTML = `${carouselMarkup(slideData)}`
    expect(carousel.innerHTML).toContain('whirli-button');
  })

  test('does not add dots if showButtons key value is false', () => {
    slideData.showButtons = false;
    const container = getMarkupDOM();
    const carousel = container.querySelector('#test-carousel');
    carousel.innerHTML = `${carouselMarkup(slideData)}`
    expect(carousel.innerHTML).not.toContain('whirli-button');
  })

  test('sets the first slide class to whirli-slide--1', () => {
    const container = getMarkupDOM();
    const carousel = container.querySelector('#test-carousel');
    carousel.innerHTML = `${carouselMarkup(slideData)}`;
    const slides = container.querySelectorAll('.whirli-slide');
    const slideClasses = slides[0].classList;
    expect(slideClasses).toContain('whirli-slide--1');
  })

  test('sets the first slide aria-hidden to false', () => {
    const container = getMarkupDOM();
    const carousel = container.querySelector('#test-carousel');
    carousel.innerHTML = `${carouselMarkup(slideData)}`;
    const slides = container.querySelectorAll('.whirli-slide');
    const slideAria = slides[0].getAttribute('aria-hidden');
    expect(slideAria).toBe('false');
  })

  test('sets the second slide aria-hidden to true', () => {
    const container = getMarkupDOM();
    const carousel = container.querySelector('#test-carousel');
    carousel.innerHTML = `${carouselMarkup(slideData)}`;
    const slides = container.querySelectorAll('.whirli-slide');
    const slideAria = slides[1].getAttribute('aria-hidden');
    expect(slideAria).toBe('true');
  })
})
