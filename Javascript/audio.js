document.addEventListener('DOMContentLoaded', function() {
    const clickSound = document.getElementById('clickSound');

    // Функция для воспроизведения звука
    function playClickSound() {
        clickSound.currentTime = 0; // Устанавливаем время аудио в начало (если звук уже играет)
        clickSound.play(); // Воспроизводим звук
    }

    document.body.addEventListener('click', playClickSound); // Добавляем обработчик на клик по всему body
});