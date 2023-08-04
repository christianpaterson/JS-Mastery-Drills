const form = document.querySelector("#quiz-form");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question-item");
const congrats = document.querySelector("#alert");
const NUMBER_OF_QUESTIONS = questions.length;

form.addEventListener("submit", e => {
  e.preventDefault();
  let selectedAnswers = Array.from(answers).filter(a => a.checked);
  let correctResponses = 0;

  questions.forEach(question => {
    let questionInputs = Array.from(question.querySelectorAll("input"));
    let isUnanswered = questionInputs.every(a => !a.checked);
    if (isUnanswered) markIncorrect(question);
  });

  selectedAnswers.forEach(answer => {
    if (answer.value === "true") {
      correctResponses++;
      markCorrect(answer.closest(".question-item"));
    } else {
      markIncorrect(answer.closest(".question-item"));
    }
  });

  if (correctResponses === NUMBER_OF_QUESTIONS) {
    congrats.style.display = "block";
  }
});

function markCorrect(question) {
  question.classList.add("correct");
  question.classList.remove("incorrect");
}

function markIncorrect(question) {
  question.classList.add("incorrect");
  question.classList.remove("correct");
}
