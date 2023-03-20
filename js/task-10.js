
// const input = document.querySelector('number');
// const dataCreate = document.querySelector('button[data-create]');
// const dataDestroy = document.querySelector('button[data-destroy]'); 
// const divBoxes = document.getElementById('#boxes');

// divBoxesEl.style.display = 'flex';
// divBoxesEl.style.flexWrap = 'wrap';
// divBoxesEl.style.alignItems = 'center';
// divBoxesEl.style.marginTop = '30px';


// dataCreate.addEventListener('click', inputCreate);
// dataDestroy.addEventListener('click', destroyBoxes);

// function inputCreate(amount) {
//   let widthHeigth = 30;
//   const box = '';
//   for (let i = 0; i < amount; i ++) {
//    widthHeigth += 10 * i;
//   const div = ``;
//   divBoxesEl.insertAdjacentHTML('beforeend', boxesArr.join(''));
//  }
// }
// function destroyBoxes() {
//   inputCreate.remove();
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
//////////////////////////////////////////////////////////

// Функція створення боксів приймає параметр amount (це значення будемо брати 
//   з інпута при виклику). Треба використати цикл фо, який буде створювати задану кількість 
//   боксів (це і буде amount), в цьому циклі створюємо сам бокс (дів), додаємо йому ширину і
//    висоту, колір (можна як в 2 чи 3 завданні використати той чи інший метод). Ширина і 
//    висота спочатку мають бути по 30, на кожній ітерації додаємо +10,
//  тобто це буде якась змінна, яку будемо підставляти у ширину і висоту.

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість
//  елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
//  Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//  у такий спосіб видаляючи всі створені елементи.