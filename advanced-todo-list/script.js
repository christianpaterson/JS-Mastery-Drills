const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST";
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;
const todos = loadTodos();
todos.forEach(renderTodo);

form.addEventListener("submit", e => {
  e.preventDefault();
  const todoString = input.value;
  if (todoString === "") return;
  todos.push(todoString);
  renderTodo(todoString);
  saveTodos();
  input.value = "";
});

function renderTodo(todo) {
  const templateClone = template.content.cloneNode(true);
  const textElement = templateClone.querySelector("[data-list-item-text]");
  textElement.innerText = todo;
  list.appendChild(templateClone);
}

function saveTodos() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
  const todosStringArray = localStorage.getItem(TODOS_STORAGE_KEY);
  return JSON.parse(todosStringArray) || [];
}

// Delete todos

// Complete todos

// Save todos

// Load todos
