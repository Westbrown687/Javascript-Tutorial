const todoList = JSON.parse(localStorage.getItem("todo-list")) || [
  { name: "make dinner", dueDate: "2025-09-11" },
  {
    name: "wash dishes",
    dueDate: "2025-09-11",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = `<div>
    ${name}</div> <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);

    renderTodoList();
    "
    class="delete-button">Delete</button>
    `;
    todoListHtml += html;

    console.log(html);
  }
  localStorage.setItem("todo-list", JSON.stringify(todoList));

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");

  const dateInput = document.querySelector(".js-date-input");

  const dueDate = dateInput.value;
  const name = inputElement.value;

  todoList.push({ name: name, dueDate: dueDate });
  //console.log(todoList);
  inputElement.value = "";

  renderTodoList();
}
