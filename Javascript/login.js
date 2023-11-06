$(document).ready(function() {
    // Обработка отправки формы регистрации
    $("#registrationForm").submit(function(e) {
        e.preventDefault();
        let regUsername = $("#regUsername").val();
        let regPassword = $("#regPassword").val();

        // Добавьте код для обработки регистрации (например, отправка на сервер)

        alert("Пользователь зарегистрирован: " + regUsername);
    });

    // Обработка отправки формы входа
    $("#loginForm").submit(function(e) {
        e.preventDefault();
        let loginUsername = $("#loginUsername").val();
        let loginPassword = $("#loginPassword").val();

        // Добавьте код для проверки входа (например, проверка на сервере)

        alert("Пользователь вошел: " + loginUsername);
    });
});

// При успешной регистрации или входе покажем анимированное сообщение


$(document).ready(function() {
    // Обработка отправки формы регистрации
    $("#registrationForm").submit(function(e) {
        e.preventDefault();
        let regUsername = $("#regUsername").val();
        let regPassword = $("#regPassword").val();

        if (validatePassword(regPassword)) {
            showSuccessMessage("Пользователь зарегистрирован: " + regUsername);
        } else {
            alert("Пароль должен содержать минимум 8 символов, хотя бы одну заглавную букву, цифру и быть на латинице.");
        }
    });

    function validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
        return passwordRegex.test(password);
    }

    // Функция показа сообщения
    function showSuccessMessage(message) {
        $('.success-message').text(message).addClass('show');
        setTimeout(function() {
            $('.success-message').removeClass('show').text('');
        }, 3000); // Убрать сообщение через 3 секунды
    }
});