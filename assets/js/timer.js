document.addEventListener('DOMContentLoaded', () => {
  // DATA E HORA ALVO (horário local)
  const targetDate = new Date(2026, 5, 12, 18, 0, 0); // 12 de junho de 2026, 18:00 no fuso horário local

  const timerEl = document.getElementById('timer');
  const timeEl = document.getElementById('time');
  const contentEl = document.getElementById('content');

  if (!timerEl || !timeEl || !contentEl) {
    return;
  }

  function showContent() {
    timerEl.classList.add('hidden');
    contentEl.classList.remove('hidden');
  }

  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      showContent();
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const timeText = days > 0
      ? `${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      : `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    timeEl.textContent = timeText;
  }

  updateTimer();
  const intervalId = setInterval(() => {
    updateTimer();
    if (new Date() >= targetDate) {
      clearInterval(intervalId);
    }
  }, 1000);

  const showBtn = document.getElementById('showImageBtn');
  const imageBox = document.getElementById('imageBox');

  if (showBtn && imageBox) {
    showBtn.addEventListener('click', () => {
      imageBox.classList.remove('hidden');
      showBtn.style.display = 'none';
    });
  }
});
