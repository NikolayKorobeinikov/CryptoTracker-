// /*
//   выбираем все кнопки из навигации: рынок, избранное, портфель
//   querySelectorAll возвращает псевдомассив и для того чтобы получить кнопку будем использовать метод forEach
// */

// const caseButtons = document.querySelectorAll('.tab-btn');
// const modalWindow = document.querySelector('.modal');
// const modalOverlay = document.querySelector('.modal-overlay');
// const closeModalWindowButton = document.getElementById('closeChartModal');


// closeModalWindowButton.addEventListener('click', closeModalWindow)

// caseButtons.forEach((btn)=> {
//   btn.addEventListener('click', function(event) {
//     const currentButton = event.target; // с помощью event.target мы указываем по какой конкретно кнопке был сделан клик
//     console.log('is clicked');
//     handleButtonClick(currentButton);
//   })
// })

// /* 
//   функция клика по кнопке
//   с помощью forEach проходимся по нашему псевдомассиву и получаем доступ к каждой кнопке.
//   удаляем class='active'
//   добавляем class='active' кнопке по которой кликнули
// */

// function handleButtonClick(clickedButton) {
//   caseButtons.forEach(btn => {
//     btn.classList.remove('active');
//   });
//   clickedButton.classList.add('active');

//   // проверяем если мы нажали на кнопку Портфель и data атрибут имеет значение портфолио то мы открываем модальное окно
//   if (clickedButton.dataset.tab === 'portfolio') {
//     modalWindow.classList.add('show');
//     console.log('Показать модальное окно портфеля');
//   }
// }

// function closeModalWindow() {
//   modalWindow.classList.remove('show');
// }


// // Проверяем, был ли клик именно на фоне модального окна (оверлее)

// modalOverlay.addEventListener("click", function (event) {
//   if (event.target === modalOverlay) {
//     closeModalWindow();
//   }
// });