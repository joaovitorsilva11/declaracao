document.addEventListener("DOMContentLoaded", () => {
  // DATA E HORA ALVO
  const targetDate = new Date('2026-01-14T16:10:00');
  //2026-01-18T05:50:00   

  const timerEl = document.getElementById("timer");
  const timeEl = document.getElementById("time");
  const contentEl = document.getElementById("content");

  // Segurança extra
  if (!timerEl || !timeEl || !contentEl) {
    console.error("Elementos do timer não encontrados");
    return;
  }

  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    // Quando chegar a zero
    if (diff <= 0) {
      timerEl.style.display = "none";
      contentEl.classList.remove("hidden");
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timeEl.textContent =
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);

    const showBtn = document.getElementById("showImageBtn");
    const imageBox = document.getElementById("imageBox");

    if (showBtn && imageBox) {
    showBtn.addEventListener("click", () => {
        imageBox.classList.remove("hidden");
        showBtn.style.display = "none";
    });
    }

});
