const form = document.querySelector('.login-form');
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
        //виключаю перезавантаження сторінки
      event.preventDefault();
      const {
        //через elements достукуємось до логіна і пароля щоб з ними працювати
    elements: { email, password } //робимо деструктуризацію обьєкта
} = event.currentTarget;  // це форма на яку навішали обробник подій
//витягуємо значення input з логіном і паролем
   if (email.value === '' || password.value === '') {
    //якщо значення порожні
     return alert("Please fill in all the fields!");
  }
//якщо значення не порожні виводимо обьєкт
  const formWithObject = {
    email: email.value,
    password: password.value
  };
  console.log(formWithObject);
   //reset очищає форму після кожного введення
  event.currentTarget.reset();
 }

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//  що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//  де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
//   Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
