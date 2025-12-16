import { initCarousel } from './carousel.js';
import { initModal } from './modal.js';
import { initQuiz } from './quiz.js';
import { initAudioPlayer } from './audio.js';

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initModal();
  initQuiz();
  initAudioPlayer(); 
});
