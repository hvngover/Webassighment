
// Получаем кнопку "Подробнее" по идентификатору
const detailsButton = document.getElementById('detailsButton');

// Добавляем анимацию при наведении курсора
detailsButton.addEventListener('mouseenter', () => {
    gsap.to(detailsButton, {
        duration: 0.3, // Продолжительность анимации (в секундах)
        backgroundColor: '#0056b3', // Цвет фона при наведении
        scale: 1.05, // Увеличение размера на 5%
    });
});

// Добавляем анимацию при уходе курсора
detailsButton.addEventListener('mouseleave', () => {
    gsap.to(detailsButton, {
        duration: 0.3,
        backgroundColor: '#007bff', // Возвращаем исходный цвет фона
        scale: 1, // Возвращаем исходный размер
    });
});









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






