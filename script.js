// Определение даты окончания акции (замените ее на фактическую дату окончания)
const endDate = new Date('2023-12-31T23:59:59').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft < 0) {
        // Акция завершилась
        document.getElementById('timer').innerHTML = 'Акция завершена';
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

// Добавление кода для списка дел...


// Добавьте код для списка дел
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
                <button class="complete">Complete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("delete")) {
            target.parentElement.remove();
        } else if (target.classList.contains("complete")) {
            const taskSpan = target.parentElement.querySelector("span");
            taskSpan.classList.toggle("completed");
        }
    });
});




// Получаем элемент с классом "success-message"
const successMessage = document.querySelector('.success-message');

// Получаем кнопку "Отправить" по селектору
const submitButton = document.querySelector('.contact-form button');

// Добавляем обработчик события для кнопки "Отправить"
// Получаем элемент с классом "success-message"
const successMessage = document.querySelector('.success-message');

// Получаем форму
const contactForm = document.querySelector('.contact-form');

// Добавляем обработчик события для отправки формы
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы

    // Показываем сообщение об успешной отправке
    successMessage.style.display = 'block';

    // Запускаем анимацию появления и исчезновения
    successMessage.classList.add('animated');

    // Через 4 секунды скрываем сообщение
    setTimeout(() => {
        successMessage.style.display = 'none';
        successMessage.classList.remove('animated');
    }, 4000);
});






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




