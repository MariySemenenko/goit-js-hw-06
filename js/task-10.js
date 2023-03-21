//стукаю в html
const input = document.querySelector('number');
const dataCreate = document.querySelector('button[data-create]');
const dataDestroy = document.querySelector('button[data-destroy]'); 
const divBoxes = document.getElementById('boxes');


//додаю слухача подій на create і destroy
dataCreate.addEventListener('click', inputCreate);
dataDestroy.addEventListener('click', destroyBoxes);

function inputCreate(amount) {
  let widthHeight = 30;
  // Створюю рядок зі всіма боксом
  let box = '';
  for (let i = 0; i < amount; i ++) {
 box += `<div wigth: "${widthHeight}px" height: "${widthHeight}px" style="background-color: ${getRandomHexColor()}"></div>`;
    widthHeight += 10;
  }
  // Вставляю рядок з боксами в контейнер
  divBoxes.insertAdjacentElement('beforeend', box);
}


function destroyBoxes() {
   // Очищаю контейнер
    divBoxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//////////////////////////////////////////////////////////

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість
//  елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
//  Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//  у такий спосіб видаляючи всі створені елементи.