document.addEventListener("DOMContentLoaded", function () {
    // Click event listener
    document.getElementById("navbarNav").addEventListener("click", function (event) {
        // You can handle click events here
        console.log("Clicked:", event.target);
    });

    // Mouseover event listener
    document.querySelectorAll(".card").forEach(function (card) {
        card.addEventListener("mouseover", function () {
            // You can handle mouseover events here
            console.log("Mouseover:", card);
        });
    });

    // Keypress event listener
    document.addEventListener("keypress", function (event) {
        // You can handle keypress events here
        console.log("Keypress:", event.key);
    });

    // Additional event listener for list items
    document.querySelectorAll(".list-group-item").forEach(function (listItem) {
        listItem.addEventListener("click", function () {
            // You can handle click events on list items here
            console.log("List item clicked:", listItem.textContent);
        });
    });

    // Additional event listener for carousel items
    document.querySelectorAll(".carousel-item").forEach(function (carouselItem, index) {
        carouselItem.addEventListener("click", function () {
            // You can handle click events on carousel items here
            console.log("Carousel item clicked:", index);
        });
    });

    // Additional event listener for form submission
    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        // You can handle form submission events here
        console.log("Form submitted!");
    });
});
