//достукуємось до body, button, span
const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const p = document.querySelector('.color');

button.addEventListener('click', () => {
  console.log("click event listener callback");
  //передаю колбек getRandomHexColor
  const getRandomHex = getRandomHexColor();
  //задаю background-color body
 body.style.backgroundColor = getRandomHex;
  p.textContent = randomColor;
});

function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change-color і виводить значення кольору в span.color.

