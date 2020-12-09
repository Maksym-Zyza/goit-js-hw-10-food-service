const bodyRef = document.querySelector('#body')
const changeRef = document.querySelector('#theme-switch-toggle')

// 1) При нажатии(событие change) на чекбокс #theme -switch-toggle -
// добавлять на элемент body класс light-theme или dark-theme.
const handleClick = event => {
    // console.log(bodyRef);
    bodyRef.classList.add('light-theme')
    changeRef.getAttribute("checked") === "true" || false;
    // console.log(changeRef);
};

changeRef.addEventListener("click", handleClick);

// 2) Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorage.setItem('Theme', JSON.stringify(Theme))
const value = localStorage.getItem('Theme')
// console.log(value);
const parsedValue = JSON.parse(value)
console.log(parsedValue);

