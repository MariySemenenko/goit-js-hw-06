const inputControl = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

inputControl.addEventListener("input", changeText);//'input' відстежує подію font-size-control
//і викликає функцію changeText

function changeText(event) {
    
    inputText.style.fontSize = inputControl.value + 'px';//змінюємо у текста колір
    
    console.log(inputText);//значення font-size у консолі міняється
}


// Напиши скрипт, який реагує на зміну значення input#font-size-control
//  (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
//   В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.