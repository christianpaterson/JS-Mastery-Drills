const form = document.querySelector("#form");
const errors = document.querySelector(".errors");
const checkbox = document.querySelector("#terms");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const errorList = document.querySelector(".errors-list");
const passwordConfirmation = document.querySelector("#password-confirmation");

form.addEventListener("submit", e => {
  clearErrors();
  {
    const errorMessages = [
      "Username must be at least 6 characters long",
      "Password must be at least 10 characters long",
      "Password's must match",
      "You must accept the terms",
    ];

    if (username.value.length < 6) {
      showErrors(e, errorMessages[0]);
    }
    if (password.value.length < 10) {
      showErrors(e, errorMessages[1]);
    }
    if (password.value !== passwordConfirmation.value) {
      showErrors(e, errorMessages[2]);
    }
    if (checkbox.checked === false) {
      showErrors(e, errorMessages[3]);
    }
  }
});

function clearErrors() {
  errors.classList.remove(".show");
  while (errorList.firstChild) {
    errorList.removeChild(errorList.firstChild);
  }
}

function showErrors(e, errorMessage) {
  e.preventDefault();
  errors.classList.add("show");
  let error = document.createElement("li");
  error.classList.add("error");
  error.innerHTML = errorMessage;
  errorList.appendChild(error);
}
