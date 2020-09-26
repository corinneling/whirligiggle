class Whirligig {
	constructor({
		slides,
		prev,
		next,
		lazyImages,
		lazyImageClass
	} = {}) {
		this.slides = slides;
		this.prev = prev;
		this.next = next;
		this.lazyImages = lazyImages;
		this.lazyImageClass = lazyImageClass
	}
	
	disableButtons = (index) => {
		const lastSlideIndex = this.slides.length - 1;
		const firstSlideIndex = 0;

		if (index === lastSlideIndex) {
			this.next.setAttribute('aria-disabled', true);
			this.next.setAttribute('aria-label', 'no next slide available');
		} else if (index === firstSlideIndex) {
			this.prev.setAttribute('aria-disabled', true);
			this.prev.setAttribute('aria-label', 'no previous slide available');
		} else {
			this.next.removeAttribute('aria-disabled');
			this.prev.removeAttribute('aria-disabled');
			this.next.setAttribute('aria-label', 'next slide');
			this.prev.setAttribute('aria-label', 'previous slide');
		}
	}
		 
	controlSlider = (e) => {
		let currentIndex;
		this.slides.forEach((slide, index) => {
			const hiddenAttribute = slide.getAttribute('aria-hidden');
			if (hiddenAttribute === 'false') currentIndex = index
		});
		
		const slideToActivate = e.target.classList.contains('next')
			? this.slides[currentIndex + 1]
			: e.target.classList.contains('prev')
				? this.slides[currentIndex - 1]
				: null;

		if (slideToActivate !== undefined) {
			// hide current slide
			this.slides[currentIndex].setAttribute('aria-hidden', true);
			this.slides[currentIndex].removeAttribute('tabindex');

			// disable buttons if needed
			const activateIndex = [...this.slides].indexOf(slideToActivate);
			this.disableButtons(activateIndex);

			// set active slide
			slideToActivate.setAttribute('aria-hidden', false);
			slideToActivate.setAttribute('tabindex', 0);
			slideToActivate.focus()
		} 
	}
	
	lazyLoadImages = () => {
		const imageObs = new IntersectionObserver((entries, observe) => {
			entries.forEach((entry) => {
				if(entry.isIntersecting) {
					const image = entry.target;
					image.classList.remove(this.lazyImageClass);
					imageObs.unobserve(image);
				}
			})
		});
		
		this.lazyImages.forEach((slideImage) => {
			imageObs.observe(slideImage);
		})
	}
} 
