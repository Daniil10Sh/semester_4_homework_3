
import { IntersectionObserver } from 'intersection-observer-polyfill';

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute('data-src');
      img.classList.remove('loading');
      observer.unobserve(img);
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 
});

const images = document.querySelectorAll('img[data-src]');
images.forEach(image => {
  observer.observe(image);
});
