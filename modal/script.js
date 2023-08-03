// Select all elements

const list = document.querySelector("#list");
const form = document.querySelector("#new-item-form");
const input = document.querySelector("#item-input");
const label = document.querySelector("label");
const button = document.querySelector("button");


// Add element on form submission
// Remove from list by clicking

form.addEventListener("submit", e => {
  e.preventDefault();
  let listItem = document.createElement("div");
  listItem.innerHTML = input.value;
  listItem.classList.add('list-item')
  list.appendChild(listItem);
  input.value = "";

  listItem.addEventListener("click", () => listItem.remove());
});