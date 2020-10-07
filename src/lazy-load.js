export function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('.whirli-slide.whirli-lazy-img')

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
