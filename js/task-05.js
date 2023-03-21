//достукуємось до input and output
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

//добавляю подію input і функцію handleSubmit
nameInput.addEventListener("input", handleSubmit);

function handleSubmit(event) {
 //в target записуємо елемент який активував подію  
    const name = event.target.value;
    // console.log(name);
    if(name) {
      //якщо не порожній
      nameOutput.textContent = name;
    } else {
      //якщо порожній
        nameOutput.textContent = 'Anonymous';
      }  
      
};

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//  підставляє його поточне значення в span#name-output. Якщо інпут порожній,
//   у спані повинен відображатися рядок "Anonymous".

