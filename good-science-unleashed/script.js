const cards = document.querySelectorAll(".card");
const cardHeaders = document.querySelectorAll(".card-header");
const expandButtons = document.querySelectorAll(".expand-button");
const cardBodies = document.querySelectorAll(".card-body");

expandButtons.forEach(button => {
  button.addEventListener("click", () => {
    const parentCard = button.closest(".card");
    const childBody = parentCard.querySelector(".card-body");
    childBody.classList.toggle("show");
    if (childBody.classList.contains("show")) {
      button.innerText = "Collapse";
    } else {
      button.innerText = "Expand";
    }
  });
});
