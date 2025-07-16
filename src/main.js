const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// submit the form
form.addEventListener("submit", function (e) {
    e.preventDefault();  

    // store the input value in task text 
    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Please enter a task.");
         return;
    }
       
    // Creat the main div to store multiple task element in it 
    const taskItem = document.createElement("div")
    taskItem.classList.add("task-item")

  //Create the task text element
   const taskTextElement = document.createElement("span")
   taskTextElement.textContent = taskText
   taskTextElement.classList.add("task-text")

  // Create  TimeStamp element
   const timeStamp =  document.createElement("small");
   const currentTime = new Date();
   timeStamp.textContent = `Added on: ${currentTime.toDateString()}`;
   timeStamp.style.display = "block";
   timeStamp.style.fontSize = "0.8em";
   timeStamp.style.color = "#888";

// Add click to toggle 'completed' class
taskTextElement.addEventListener("click", ()=>{
    taskTextElement.classList.toggle("completed")
});

// Create delete button
const deleteBtn = document.createElement("button")
deleteBtn.textContent = "🗑️";
deleteBtn.classList.add("delete-btn");

// Remove task when delete button is clicked
deleteBtn.addEventListener("click", ()=>{
  taskItem.remove();
});

// edit task when button is clicked
 const editBtn = document.createElement("button");
 editBtn.textContent = "✏️";
 editBtn.classList.add("edit-btn");
 
 editBtn.addEventListener("click", ()=>{
  const newTask = prompt("Edit your task: ", taskTextElement.textContent);
    if(newTask !== null && newTask.trim() !== ""){
      taskTextElement.textContent = newTask.trim();
    }
 });

  // Append task text and delete button and edit button to task item
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(timeStamp);
  taskItem.appendChild(deleteBtn);
   taskItem.appendChild(editBtn);

  // Add the task item to the task list
  taskList.appendChild(taskItem);
  input.value = "";
});