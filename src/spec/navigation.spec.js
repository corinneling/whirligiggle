import { fireEvent } from '@testing-library/dom'
import { handleButtonNavigation, handleDotNavigation } from '../navigation';
import { getCarouselDOM } from './spec-helper';

describe('Carousel Navigation', () => {
  test('updates aria-hidden of next slide to false when next button is clicked', () => {
    const container = getCarouselDOM();
    const nextButton = container.querySelector('.whirli-button--next');
    handleButtonNavigation();
    fireEvent.click(nextButton);
    const slideTwo = container.querySelector('.whirli-slide--2');
    expect(slideTwo.getAttribute('aria-hidden')).toBe('true');
    expect(slideTwo.getAttribute('aria-hidden')).toBe('true');
  })
})