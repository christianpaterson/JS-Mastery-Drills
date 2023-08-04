const form = document.querySelector("#form");
const errorsContainers = document.querySelector(".errors");
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
      addErrors(e, errorMessages[0]);
    }
    if (password.value.length < 10) {
      addErrors(e, errorMessages[1]);
    }
    if (password.value !== passwordConfirmation.value) {
      addErrors(e, errorMessages[2]);
    }
    if (!checkbox.checked) {
      addErrors(e, errorMessages[3]);
    }
  }
});

function clearErrors() {
  errorsContainers.classList.remove(".show");
  while (errorList.firstChild) {
    errorList.removeChild(errorList.firstChild);
  }
}

function addErrors(e, errorMessage) {
  e.preventDefault();
  errorsContainers.classList.add("show");
  let error = document.createElement("li");
  error.innerHTML = errorMessage;
  errorList.appendChild(error);
}
