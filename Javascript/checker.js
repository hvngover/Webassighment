document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    const emailValue = emailInput.value;

    if (!isValidEmail(emailValue)) {
        emailError.textContent = 'Некорректный email. Пожалуйста, введите правильный email.';
        emailInput.classList.add('is-invalid');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('is-invalid');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}
