const inputBox = document.getElementById("inputTask");
const addBtn = document.querySelector(".addbtn");
const taskList = document.querySelector(".task-list");
const errorMsg = document.getElementById("errormsg");

// Add task on Enter
inputBox.addEventListener('keydown', e => {
  if (e.key === 'Enter') addBtn.click();
});

// Add task on button click
addBtn.addEventListener("click", () => {
  const taskText = inputBox.value.trim();
  if (taskText === "") {
    errorMsg.textContent = "Please enter a task!";
    return;
  }
  errorMsg.textContent = "";
  addTask(taskText);
  inputBox.value = "";
});

function addTask(text) {
  const taskItem = document.createElement("div");
  taskItem.className = "list-group-item d-flex justify-content-between align-items-center";

  const leftSide = document.createElement("div");   //groups checkbox and task text
  leftSide.className = "d-flex align-items-center gap-2";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.className = "form-check-input";

  const label = document.createElement("span");
  label.textContent = text;                   // creates task text

  const delBtn = document.createElement("button");
  delBtn.className = "btn btn-danger btn-sm";
  delBtn.textContent = "Delete";

  toggle.addEventListener('change', () => {
    label.classList.toggle('completed', toggle.checked);
  });

  delBtn.addEventListener('click', () => taskItem.remove());

  //combining elements together and adds to main task list
  leftSide.append(toggle, label);    
  taskItem.append(leftSide, delBtn);
  taskList.appendChild(taskItem);
}

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem('theme');  //the theme remains saved even after page refreshes
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.checked = true;   //checks toggle switch
}

themeToggle.addEventListener("change", () => {
  const on = themeToggle.checked;
  document.body.classList.toggle("dark-mode", on);
  localStorage.setItem("theme", on ? "dark" : "light"); //if on is true saves dark otherwise saves light
});
