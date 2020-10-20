export function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('.whirli-slide.whirli-lazy-img')

  if (typeof IntersectionObserver === 'undefined') {
    lazyImages.forEach((image) => {
      image.classList.remove('whirli-lazy-img');
    })

    return;
  }

  const imageObs = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        const image = entry.target;
        image.classList.remove('whirli-lazy-img');
        imageObs.unobserve(image);
      }
    })
  });
  
  lazyImages.forEach((slideImage) => {
    imageObs.observe(slideImage);
  })
}
