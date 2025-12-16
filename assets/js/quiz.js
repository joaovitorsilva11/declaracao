export function initQuiz() {
  const questions = [
    {
      question: "Qual o nome do restaurante que foi o nosso primeiro encontro?",
      options: ["A: Cantucci", "B: Ticiana", "C: Izzi Garden", "D: Soban"],
      answer: 1
    },
    {
      question: "Qual é o dia mais importante do mês?",
      options: ["A: 3", "B: 8", "C: 18", "D: 22"],
      answer: 2
    },
    {
      question: "Quem é a mulher mais linda do mundo?",
      options: ["A: Ilana Freitas", "B: Gisele Bündchen", "C: Naomi Campbell", "D: Cindy Crawford"],
      answer: 0
    },
    {
      question: "Assim que conversamos você disse que iamos ser um casal de anime, qual era?",
      options: ["A: Goku & Chi-Chi", "B: Naruto Uzumaki & Hinata Hyuga", "C: Tanjiro Kamado & Kanao Tsuyuri", "D: Shikamaru Nara & Temari no Sabaku"],
      answer: 3
    },
    {
      question: "Quantos dias tem o nosso foguinho (não vale roubar)?",
      options: ["A: 55", "B: 56", "C: 57", "D: 58"],
      answer: 2
    }
  ];

  let current = 0;
  let score = 0;

  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const quizResult = document.getElementById('quiz-result');
  const scoreEl = document.getElementById('score');

  function showQuestion() {
    const q = questions[current];
    questionText.textContent = q.question;
    questionText.style.display = 'block';
    optionsContainer.style.display = 'block';
    quizResult.style.display = 'none';
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.classList.add('quiz-option');
      btn.addEventListener('click', () => checkAnswer(idx, btn));
      optionsContainer.appendChild(btn);
    });
  }

  function checkAnswer(selectedIdx, btn) {
    const correctIdx = questions[current].answer;
    const allButtons = optionsContainer.querySelectorAll('button');

    allButtons.forEach((b, i) => {
      b.disabled = true;
      if (i === correctIdx) {
        b.classList.add('selected'); // correto
      } else if (i === selectedIdx) {
        b.classList.add('wrong'); // errado
      }
    });

    if (selectedIdx === correctIdx) score++;

    setTimeout(() => {
      current++;
      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }, 1200);
  }

  function showResult() {
    quizResult.style.display = "block";
    scoreEl.textContent = score;
    questionText.style.display = "none";
    optionsContainer.style.display = "none";

    // Se acertar todas, mostra a imagem especial
    const specialImage = document.getElementById('special-image');
    if (score === questions.length) {
        specialImage.style.display = "block";
    }
  }

  showQuestion();
}
