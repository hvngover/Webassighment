// Set the countdown date and time
const countdownDate = new Date(2023, 10, 27, 23, 59, 59).getTime();

// Update the countdown every second
const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;

    if (timeRemaining <= 0) {
        // If the countdown has ended, display a message
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        clearInterval(countdownTimer);
    } else {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
        document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
    }
}, 1000); // Update every second
