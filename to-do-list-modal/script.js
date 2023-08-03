// Select all modal elements
const modal = document.querySelector("#modal");
const modalBtn = document.querySelector("#open-modal-btn");
const modalCloseBtn = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");
const completedItemsContainer = document.querySelector("#completed-items");
const defaultItem = document.querySelector("#default-item");

// Open & close modal & overlay
modalBtn.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}

modalCloseBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Select all list elements
const list = document.querySelector("#list");
const form = document.querySelector("#new-item-form");
const input = document.querySelector("#item-input");
const label = document.querySelector("label");
const button = document.querySelector("button");

// Add element on form submission & remove
form.addEventListener("submit", e => {
  e.preventDefault();
  let listItem = document.createElement("p");
  listItem.classList.add("list-item");
  listItem.classList.add("hovered");
  listItem.innerHTML = input.value;
  list.appendChild(listItem);
  input.value = "";

  listItem.addEventListener("click", () => {
    defaultItem.remove();
    completedItemsContainer.appendChild(listItem);
    listItem.classList.remove("list-item");
    listItem.classList.remove("hovered");
  });
});
