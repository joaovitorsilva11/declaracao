export function initModal() {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');

  window.openModal = (src) => {
    modalImg.src = src;
    modal.classList.add('active');
  };

  modal.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}
