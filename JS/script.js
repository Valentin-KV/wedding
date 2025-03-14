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

  /* Скрипт для отправки данных в гуглдок*/

  document.getElementById('weddingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyG0fAql1TpAwU3F38DngDICGQ4Ag_WCEzSGlTQVrhfgCxs6y_0M7copSo2TDEHK2fS/exec'
    const responseMessage = document.getElementById('responseMessage')

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            responseMessage.innerHTML = "Отправлено успешно!";
            setTimeout(function(){
                responseMessage.innerHTML = "";
            }, 3000);
            event.target.reset(); // Сброс формы после успешной отправки
        })
        .catch(error => {
            console.error('Error!', error.message);
            responseMessage.innerHTML = "Ошибка отправки данных";
            setTimeout(function(){
                responseMessage.innerHTML = "";
            }, 3000);
        });
});