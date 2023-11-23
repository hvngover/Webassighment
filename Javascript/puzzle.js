function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function returnToMainMenu() {
    // Implement the logic to return to the main menu
    // For example, redirect to another page or reset the current state
    alert("Returning to main menu. Implement this function.");
}