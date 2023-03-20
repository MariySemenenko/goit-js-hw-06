//отримати значення з дата атрибут
const input = document.querySelector('#validation-input');


input.addEventListener("blur", setOutput);
function setOutput(event) {
    const inputValue = event.target.value; //отримати посилання на елемент на якому є подія blur
    console.log(inputValue);
  const dataLength = event.target.dataset.length;
  console.log(dataLength);
    console.log(input.dataset.length);
    
if(inputValue.length === Number(dataLength)) {
    
    input.classList.add('valid');
     input.classList.remove('invalid');
} else {
    input.classList.add('invalid');
     input.classList.remove('valid');
    console.log(inputValue);
}
};
//Треба рахувати довжину цього value і порівнювати з довжиною, що вказана в дата-
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в 
//  атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//  якщо неправильна кількість - червоним.