let addButton = document.getElementById("addTaskButton");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {

    let newTask = document.createElement("li");
    if (taskInput.value !== "") {
        newTask.textContent = taskInput.value;
        let deleteButton = document.createElement("button");
        document.createElement("button");
        deleteButton.textContent = "Delete";
        newTask.appendChild(deleteButton);
        deleteButton.addEventListener("click", function() { 
        newTask.remove();
        });
        taskList.appendChild(newTask)
        taskInput.value = "";
    }
});


