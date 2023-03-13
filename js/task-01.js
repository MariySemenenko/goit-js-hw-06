// 
const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
const title = item.querySelector('h2');
const itemsList = item.querySelectorAll('li');
console.log(`Category: ${title.textContent}`);
console.log(`Elements: ${itemsList.length}`);
});
// Порахує і виведе в консоль кількість категорій
// в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде
// і виведе в консоль текст заголовку елемента (тегу <h2>) і 
//кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach()
// і властивості навігації по DOM.
// <!-- Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5 -->


