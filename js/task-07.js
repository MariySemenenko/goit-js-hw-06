const inputControl = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');
//навішуємо на інпут подію інпут
inputControl.addEventListener("input", changeText);//'input' відстежує подію font-size-control
//і викликає функцію changeText

function changeText(event) {
    //зчитуємо з інпута значення value і записуємо його в спан
    inputText.style.fontSize = inputControl.value + 'px';//змінюємо у текста колір
    
    // console.log(inputText);console для себе (значення font-size у консолі міняється)
}


// Напиши скрипт, який реагує на зміну значення input#font-size-control
//  (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
//   В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.