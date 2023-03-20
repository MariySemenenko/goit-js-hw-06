//створюємо змінну counterValue
const valueValue = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
//створюємо змінну з значенням 0
let counterValue = 0;
//достукуємось до 2-х кнопок


//додаємо слухачів
decrementButton.addEventListener("click", decrementValue);
incrementButton.addEventListener("click", incrementValue);
//зменшуємо значення
function decrementValue() {
    counterValue -= 1;
    valueValue.textContent = counterValue;//оновлюємо інтерфейс
}
//збільшуємо значення
function incrementValue() {
    counterValue += 1;
    valueValue.textContent = counterValue;
    }
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
//та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


