export function initAudioPlayer() {
  const audio = document.getElementById('audio');
  const playPauseBtn = document.getElementById('play-pause');
  const progress = document.getElementById('progress');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');

  if (!audio) return; // segurança

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = '❚❚';
    } else {
      audio.pause();
      playPauseBtn.textContent = '▶';
    }
  });

  audio.addEventListener('loadedmetadata', () => {
    progress.max = Math.floor(audio.duration);
    durationEl.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
    progress.value = Math.floor(audio.currentTime);
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
  });

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }
}
