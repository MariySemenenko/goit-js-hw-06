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
const li = document.createElement('li');
li.classList.add('item');
li.textContent = ingredient;
return li;
});
everyIngredients.append(...liElements);
console.log(everyIngredients);

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй
//  метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список 
// ul#ingredients.

