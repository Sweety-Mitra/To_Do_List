const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Function to add task
function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Append to list
  todoList.appendChild(li);

  // Clear input
  input.value = "";

  // Delete functionality
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });
}

// Add button click
addBtn.addEventListener("click", addTask);

// Press Enter key to add task
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
