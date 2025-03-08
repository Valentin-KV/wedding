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

document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.accordion-toggle');

    toggles.forEach(toggle => {
      toggle.addEventListener('click', function () {
        const content = this.nextElementSibling;
        
        // Скрыть все открытые содержимое
        document.querySelectorAll('.accordion-content').forEach(item => {
          if (item !== content) {
            item.style.maxHeight = null;
            item.style.padding = '0 10px';
            item.previousElementSibling.classList.remove('active');
            item.previousElementSibling.querySelector('.plus-icon').textContent = '+';
          }
        });

        // Переключить отображение текущего содержимого и значка
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          content.style.padding = '0 10px';
          this.classList.remove('active');
          this.querySelector('.plus-icon').textContent = '+';
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.padding = '10px';
          this.classList.add('active');
          this.querySelector('.plus-icon').textContent = '-';
        }
      });
    });
  });
