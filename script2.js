// Получаем форму и элементы для валидации и сообщений
const contactForm = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

// Добавляем обработчик события для отправки формы
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Проверка валидности email с использованием регулярного выражения
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = emailPattern.test(emailInput.value);

    // Проверка, что все поля заполнены
    if (nameInput.value && isEmailValid && messageInput.value) {
        // Ваш код для отправки данных на сервер (например, через AJAX)

        // Очищаем поля формы
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';

        // Отображаем сообщение об успешной отправке
        errorMessage.innerText = '';
        successMessage.innerText = 'Ваше сообщение успешно отправлено!';
    } else {
        errorMessage.innerText = 'Пожалуйста, заполните все поля корректно.';
        successMessage.innerText = '';
    }
});
