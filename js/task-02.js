const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const everyIngredients = document.querySelector('#ingredients');
//створюємо ноаий масив значень
const liElements = ingredients.map((ingredient) => {
  //створюю 'li'
const li = document.createElement('li');
//додаю до 'li' клас 'item'
li.classList.add('item');
//Додаю назву інгредієнта
li.textContent = ingredient;
return li;
});
//вставляю усі <li> за одну операцію
everyIngredients.append(...liElements);
console.log(everyIngredients);

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй
//  метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список 
// ul#ingredients.

