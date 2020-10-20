import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom'
import { handleButtonNavigation, handleDotNavigation, setSlideLinkTabindex } from '../navigation';
import { getCarouselDOM } from './spec-helper';

describe('Carousel Navigation', () => {
  describe('Arrow Button Navigation', () => {
    let nextButton;
    let prevButton;
    let slideOne;
    let slideTwo;
    let slideThree;
    let slides;
  
    beforeEach(() => {
      getCarouselDOM();
      slides = screen.getAllByText('slide');
      handleButtonNavigation(slides);

      nextButton = screen.getByText('Next Slide');
      prevButton = screen.getByText('Previous Slide');
      slideOne = screen.getByTestId('slide-one');
      slideTwo = screen.getByTestId('slide-two');
      slideThree = screen.getByTestId('slide-three');
    })
  
    test('updates aria-hidden of next slide to false when next button is clicked', () => {
      userEvent.click(nextButton)
      expect(slideOne).toHaveAttribute('aria-hidden', 'true');
      expect(slideTwo).toHaveAttribute('aria-hidden', 'false');
    })

    test('updates aria-hidden of prev slide to false when prev button is clicked', () => {
      userEvent.click(nextButton)
      userEvent.click(prevButton)
      expect(slideTwo).toHaveAttribute('aria-hidden', 'true');
      expect(slideOne).toHaveAttribute('aria-hidden', 'false');
    })
  
    test('does nothing if there is no slide to activate', () => {
      userEvent.click(nextButton)
      userEvent.click(nextButton)
      userEvent.click(nextButton)
      expect(slideThree).toHaveAttribute('aria-hidden', 'false');
    })
  
    test('adds tabindex to slide when it is showing', () => {
      userEvent.click(nextButton)
      expect(slideTwo).toHaveAttribute('tabindex', '0');
    })
  
    test('removes tabindex once slide is no longer showing', () => {
      userEvent.click(nextButton)
      userEvent.click(nextButton)
      expect(slideTwo).not.toHaveAttribute('tabindex');
    })
  
    test('disables next button if last slide is showing', () => {
      userEvent.click(nextButton)
      userEvent.click(nextButton)
      expect(nextButton).toHaveAttribute('aria-disabled', 'true');
    })
  
    test('updates aria label of next button if last slide is showing', () => {
      userEvent.click(nextButton)
      userEvent.click(prevButton)
      expect(nextButton).toHaveAttribute('aria-label', 'next slide');
    })
  
    test('disables previous button if first slide is showing', () => {
      userEvent.click(nextButton)
      userEvent.click(prevButton)
      expect(prevButton).toHaveAttribute('aria-disabled', 'true');
    })
  
    test('updates aria label of previous button if first slide is showing', () => {
      userEvent.click(nextButton)
      userEvent.click(prevButton)
      expect(prevButton).toHaveAttribute('aria-label', 'no previous slide available');
    })
  })

  describe('Dot Navigation', () => {
    let dotOne;
    let dotTwo;
    let dotThree;
    let slideOne;
    let slideTwo;
    let slideThree;
    let slides;
  
    beforeEach(() => {
      getCarouselDOM();
      slides = screen.getAllByText('slide');
      handleDotNavigation(slides);
      dotOne = screen.getByText('Go to slide one');
      dotTwo = screen.getByText('Go to slide two');
      dotThree = screen.getByText('Go to slide three');
      slideOne = screen.getByTestId('slide-one');
      slideTwo = screen.getByTestId('slide-two');
      slideThree = screen.getByTestId('slide-three');
    })
  
    test('updates aria-hidden of slide three to false when dot three is clicked', () => {
      userEvent.click(dotThree)
      expect(slideOne).toHaveAttribute('aria-hidden', 'true');
      expect(slideThree).toHaveAttribute('aria-hidden', 'false');
    })

    test('updates aria-hidden of slide two to false when dot two is clicked', () => {
      userEvent.click(dotTwo)
      expect(slideOne).toHaveAttribute('aria-hidden', 'true');
      expect(slideTwo).toHaveAttribute('aria-hidden', 'false');
    })

    test('updates aria-hidden of slide two to false when dot two is clicked', () => {
      userEvent.click(dotThree)
      userEvent.click(dotOne)
      expect(slideOne).toHaveAttribute('aria-hidden', 'false');
      expect(slideThree).toHaveAttribute('aria-hidden', 'true');
    })
  })

  describe('Set slide link tabindex', () => {
    test('sets the first slide tabindex to 0', () => {
      getCarouselDOM();
      const slides = screen.getAllByText('slide');
      setSlideLinkTabindex(slides);
      const slideOneLink = screen.getByText('link on slide one');
      expect(slideOneLink).toHaveAttribute('tabindex', '0')
    })

    test('sets the second slide tabindex to -1', () => {
      getCarouselDOM();
      const slides = screen.getAllByText('slide');
      setSlideLinkTabindex(slides);
      const slideOneLink = screen.getByText('link on slide two');
      expect(slideOneLink).toHaveAttribute('tabindex', '-1')
    })
  })
})