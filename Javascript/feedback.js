function validateForm() {
    // Reset error messages
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";
    document.getElementById("error-message").textContent = "";

    // Get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simple email validation regex
    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    // Check if name is not empty
    if (name.trim() === "") {
        showError("name-error", "Пожалуйста, введите ваше имя.");
        return false;
    }

    // Check if email is valid
    if (!email.match(emailRegex)) {
        showError("email-error", "Пожалуйста, введите действительный email.");
        return false;
    }

    // Check if message is not empty
    if (message.trim() === "") {
        showError("message-error", "Пожалуйста, введите ваше сообщение.");
        return false;
    }

    // Form is valid, you can submit it
    return true;
}

// Function to show error messages with animation
function showError(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add("error");
    setTimeout(function() {
        errorElement.classList.remove("error");
    }, 3000); // Remove error class and fade out after 3 seconds
}

// Event listener for the form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    if (!validateForm()) {
        // Prevent form submission if there are validation errors
        event.preventDefault();
        document.getElementById("error-message").textContent = "Пожалуйста, исправьте ошибки в форме.";
    }
});