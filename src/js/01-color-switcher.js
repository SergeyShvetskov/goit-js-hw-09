
// Завдання 1 - перемикач кольорів
// Виконуй це завдання у файлах 01 - color - switcher.html і
// 01 - color - switcher.js.Подивися демо - відео роботи
// перемикача.

// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// + Напиши скрипт, який після натискання кнопки «Start», 
// раз на секунду змінює колір фону < body > на випадкове
// значення, використовуючи інлайн стиль. Натисканням на
// кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// + Враховуй, що на кнопку «Start» можна натиснути нескінченну 
// кількість разів.Зроби так, щоб доки зміна теми запущена,
// кнопка «Start» була неактивною(disabled).

// + Для генерування випадкового кольору використовуй функцію
// getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    backgBody: document.body
}
let timerId = null;

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartClick() {
    console.log("Натиснули кнопку старт");
    timerId = setInterval(() => {refs.backgBody.style.background = getRandomHexColor()}, 1000);
    refs.btnStart.setAttribute('disabled', '');
}

function onStopClick() {
    console.log("Натиснули кнопку стоп");
    refs.btnStart.removeAttribute('disabled');
    clearInterval(timerId);
}