//створюємо змінну counterValue
const counterValue = document.querySelector('#value');
//створюємо змінну з значенням 0
let valueValue = 0;
//достукуємось до 2-х кнопок
const decrementButton = document.querySelector('decrement');
const incrementButton = document.querySelector('increment');

//додаємо слухачів
decrementButton.addEventListener("click", decrementValue);
incrementButton.addEventListener("click", incrementValue);
//зменшуємо значення
function decrementValue(){
valueValue -= 1;
counterValue.textContent = valueValue;//оновлюємо інтерфейс
}
//збільшуємо значення
function incrementValue(){
    valueValue += 1;
    counterValue.textContent = valueValue;
    }



// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
//та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


