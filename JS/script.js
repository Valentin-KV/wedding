// Установите дату, до которой будет вестись отсчет
const countdownDate = new Date("Jun 07, 2025 14:59:59").getTime();

// Обновление обратного отсчета каждую секунду
const countdownFunction = setInterval(() => {
    // Текущая дата и время
    const now = new Date().getTime();

    // Разница между текущим временем и датой обратного отсчета
    const distance = countdownDate - now;

    // Вычисление дней, часов, минут и секунд
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Отображение результатов
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Действие при завершении обратного отсчета
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Время истекло!";
    }
}, 1000);
