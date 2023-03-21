//стукаю в html
const input = document.querySelector('input[type="number"]');
const dataCreate = document.querySelector('button[data-create]');
const dataDestroy = document.querySelector('button[data-destroy]'); 
const divBoxes = document.getElementById('boxes');


//додаю слухача подій на create і destroy
dataCreate.addEventListener('click', () => inputCreate(input.value));
dataDestroy.addEventListener('click', destroyBoxes);

function inputCreate(amount) {
  
  let widthHeight = 30;
  // Створюю рядок зі всіма боксами
  let box = '';
  for (let i = 0; i < amount; i ++) {
    box += `<div style="width:${widthHeight}px; height:${widthHeight}px; background-color: ${getRandomHexColor()}"></div>`;
    widthHeight += 10;
  }
  // Вставляю рядок з боксами в контейнер
  divBoxes.insertAdjacentHTML('beforeend', box);
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
