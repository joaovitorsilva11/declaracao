export function initCarousel() {
  const track = document.getElementById('carousel-track');
  const slides = track.children;
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);
}
