import { initCarousel } from './carousel.js';
import { initModal } from './modal.js';
import { initQuiz } from './quiz.js';
import { initAudioPlayer } from './audio.js';
import { initHistoryTextSwitcher } from './historia.js';

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('carousel-track')) {
    initCarousel();
  }

  if (document.getElementById('modal')) {
    initModal();
  }

  if (document.getElementById('quiz-container')) {
    initQuiz();
  }

  if (document.getElementById('audio')) {
    initAudioPlayer();
  }

  if (document.getElementById('text-type')) {
    initHistoryTextSwitcher();
  }
});
