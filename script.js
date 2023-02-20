//your code here
// Get DOM elements
const input = document.getElementById("newTodoInput");
const addButton = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

// Add event listener to Add button
addButton.addEventListener("click", addTodo);

// Function to add new todo
function addTodo() {
  // Get input value and trim whitespace
  const inputValue = input.value.trim();
  
  // Validate input value
  if (inputValue === "") {
    return; // do nothing if input is empty
  }
  
  // Create new list item
  const li = document.createElement("li");
  li.innerText = inputValue;
  
  // Add new list item to the end of the todo list
  todoList.appendChild(li);
  
  // Clear input value
  input.value = "";
}

// Add event listener to input field for Enter key
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTodo();
  }
});


