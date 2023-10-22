



const endDate = new Date('2023-10-29 23:59:59').getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft < 0) {
        // The promotion has ended
        document.getElementById('timer').innerHTML = 'Promotion Ended';
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);






// JavaScript
// JavaScript
document.querySelectorAll('.theme-toggle').forEach(function(toggle) {
    toggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-theme');
        document.querySelector('.navbar').classList.toggle('navbar-dark');
        document.querySelector('.navbar').classList.toggle('bg-dark');
        document.querySelector('footer').classList.toggle('footer-dark');
        var inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(function(input) {
            input.classList.toggle('input-dark');
        });
    });
});



