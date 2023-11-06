document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Function to create a new task item
    function createTaskItem(text) {
        const taskItem = document.createElement("li");
        taskItem.className = "list-group-item d-flex justify-content-between align-items-center";

        const taskTextDiv = document.createElement("div");
        taskTextDiv.textContent = text;

        // Add a "Complete" button
        const completeButton = document.createElement("button");
        completeButton.className = "btn btn-primary";
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", completeTask);

        // Add a "Delete" button
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger ml-2";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteTask);

        taskItem.appendChild(taskTextDiv);
        const buttonGroup = document.createElement("div");
        buttonGroup.className = "btn-group";
        buttonGroup.appendChild(completeButton);
        buttonGroup.appendChild(deleteButton);
        taskItem.appendChild(buttonGroup);

        return taskItem;
    }

    // Function to add a new task
    function addTask() {
        const text = taskInput.value.trim();
        if (text !== "") {
            const taskItem = createTaskItem(text);
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    }

    // Function to mark a task as completed
    function completeTask() {
        this.parentNode.parentNode.classList.toggle("completed");
    }

    // Function to delete a task
    function deleteTask() {
        this.parentNode.parentNode.remove();
    }

    // Event listener for adding a task
    addTaskButton.addEventListener("click", addTask);
});