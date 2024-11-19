document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img[data-src]');
  const imgOrg = [];
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('src');
          imgOrg.push(img);
          img.src = img.getAttribute('data-src');

          observer.unobserve(img);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  images.forEach((image) => {
    observer.observe(image);
  });
});