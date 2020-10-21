import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom'
import { lazyLoadImages } from '../lazy-load';
import { getLazyCarousel } from './spec-helper';

describe('Lazy Load', () => {
  test('without lazy load the whirli-lazy-img stays on each slide', () => {
    getLazyCarousel();
    const slideOne = screen.getByTestId('slide-one');
    expect(slideOne).toHaveClass('whirli-lazy-img');
  });

  test('lazy load removes the whirli-lazy-img class', () => {
    getLazyCarousel();
    lazyLoadImages();
    const slideOne = screen.getByTestId('slide-one');
    expect(slideOne).not.toHaveClass('whirli-lazy-img');
  });
});