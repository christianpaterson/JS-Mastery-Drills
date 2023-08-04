const form = document.querySelector("#quiz-form");
const inputs = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question-item");
const congrats = document.querySelector("#alert");
const NUMBER_OF_QUESTIONS = questions.length;

form.addEventListener("submit", e => {
  e.preventDefault();
  const inputArray = Array.from(inputs);
  let selectedInputs = inputArray.filter(input => input.checked === true);
  let points = 0;

  questions.forEach(question => {
    let questionInputsArray = Array.from(question.querySelectorAll("input"));
    let isUnanswered = questionInputsArray.every(
      input => input.checked === false
    );
    if (isUnanswered) {
      markIncorrect(isUnanswered);
    }
  });

  selectedInputs.forEach(answer => {
    points++;
    if (answer.value === "true") {
      let isCorrect = answer.closest(".question-item");
      markCorrect(isCorrect);
    } else if (answer.value === "false") {
      let notCorrect = answer.closest(".question-item");
      markIncorrect(notCorrect);
    }
  });

  if (points === NUMBER_OF_QUESTIONS) {
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
