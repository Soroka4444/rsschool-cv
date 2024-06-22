let pageWidth = document.documentElement.scrollWidth
console.log(pageWidth);

const windowInnerWidth = window.innerWidth;

console.log(windowInnerWidth);

let header = document.querySelector("header");
let linkOpenffice = document.querySelector("#linkOpenffice");//ссылка на ЛК для адаптива
let navigation = document.querySelector("#navigation");//навигация
let imgAccount = document.querySelector("#imgAccount");//фото с ссылкой на ЛК для ПК версии
let burger = document.querySelector("#burger");//кнопка открытия навигации в адаптиве
let clozeNav = document.querySelector("#clozeNav");//кнопка закрытия навигации в адаптиве

function openNav() {
    navigation.style.display = "flex";
    burger.style.display = "none";
    linkOpenffice.style.display = "block";
    header.style.alignItems = "baseline";
    clozeNav.style.display = "block";
}

function clozedNav() {
    if (pageWidth<=990) {
        navigation.style.display = "none";
        burger.style.display = "flex";
    }
    linkOpenffice.style.display = "none";
    clozeNav.style.display = "none";
    header.style.alignItems = "center";
}

if (pageWidth>990) {
    navigation.style.display = "flex";
    burger.style.display = "none";
}

let slayder = document.querySelector(".blockForSlider") ; //слайдер в баннере
let backButton = document.querySelector("#backButton");//кнопка назад
let nextButton = document.querySelector("#nextButton");//кнопка вперёд

let circleZero = document.querySelector("#circleZero"); //для индикаторов
let circleOne = document.querySelector("#circleOne");
let circleTwo = document.querySelector("#circleTwo");
let circleThree = document.querySelector("#circleThree");

//массив для слайдера в баннере
let arrSlayder = new Array();
arrSlayder = ["./images/photo_main_slider.png", "./images/photo_hand2hand.png", "./images/photo_russel_hugs.png", "./images/photo_command.png"];

let numSlide = 0;

//функция перелистывания слайдера вперед
function flippingNext() {
    if (numSlide<3) {
        numSlide++;
    }else{
        numSlide = 0;
    }
    for (let i = 0; i < arrSlayder.length; i++) {
        if (numSlide == i) {
            slayder.style.backgroundImage = "url(" + arrSlayder[i] + ")";   
            if(i == 0){
                circleZero.classList.add('indicatorBlue');
                circleZero.classList.remove('indicatorWhite');
            } else{
                circleZero.classList.add('indicatorWhite');
                circleZero.classList.remove('indicatorBlue');
            }
            if(i == 1){
                circleOne.classList.add('indicatorBlue');
                circleOne.classList.remove('indicatorWhite');
            } else{
                circleOne.classList.add('indicatorWhite');
                circleOne.classList.remove('indicatorBlue');
            }
            if(i == 2){
                circleTwo.classList.add('indicatorBlue');
                circleTwo.classList.remove('indicatorWhite');
            } else{
                circleTwo.classList.add('indicatorWhite');
                circleTwo.classList.remove('indicatorBlue');
            }
            if(i == 3){
                circleThree.classList.add('indicatorBlue');
                circleThree.classList.remove('indicatorWhite');
            } else{
                circleThree.classList.add('indicatorWhite');
                circleThree.classList.remove('indicatorBlue');
            }
        }
    }
}

//функция перелистывания слайдера назад
function flippingBack(){
    if (numSlide>0) {
        numSlide--;
    }else{
        numSlide = 3;
    }
    for (let i = 0; i < arrSlayder.length; i++) {
        if (numSlide == i) {
            slayder.style.backgroundImage = "url(" + arrSlayder[i] + ")";   
        }
        if(i == 0){
            circleZero.classList.add('indicatorBlue');
            circleZero.classList.remove('indicatorWhite');
        } else{
            circleZero.classList.add('indicatorWhite');
            circleZero.classList.remove('indicatorBlue');
        }
        if(i == 1){
            circleOne.classList.add('indicatorBlue');
            circleOne.classList.remove('indicatorWhite');
        } else{
            circleOne.classList.add('indicatorWhite');
            circleOne.classList.remove('indicatorBlue');
        }
        if(i == 2){
            circleTwo.classList.add('indicatorBlue');
            circleTwo.classList.remove('indicatorWhite');
        } else{
            circleTwo.classList.add('indicatorWhite');
            circleTwo.classList.remove('indicatorBlue');
        }
        if(i == 3){
            circleThree.classList.add('indicatorBlue');
            circleThree.classList.remove('indicatorWhite');
        } else{
            circleThree.classList.add('indicatorWhite');
            circleThree.classList.remove('indicatorBlue');
        }
    }  
}

//Для запуска анимации ПОСЛЕ скролла. Стр одной новости

let htmlNewsInner = document.querySelector("#htmlNewsInner");

let approachOne = document.querySelector(".approachOne");
let approachTwo = document.querySelector(".approachTwo");
let approachThree = document.querySelector(".approachThree");
let approachFour = document.querySelector(".approachFour");


window.addEventListener("scroll", (event) => {
    let hjn = htmlNewsInner.scrollTop;
    if (hjn>120) {
        approachOne.classList.add('approachRightAnimation');
        approachTwo.classList.add('approachLeftAnimation');
        approachThree.classList.add('approachRightAnimation');
        approachFour.classList.add('approachLeftAnimation');
    }
});

let slayderNews = document.querySelector(".blockForSliderNews") ; //слайдер новости
let backButtonNews = document.querySelector("#backButtonNews");//кнопка назад
let nextButtonNews = document.querySelector("#nextButtonNews");//кнопка вперёд

let circleZeroNews = document.querySelector("#circleZeroNews"); //для индикаторов
let circleOneNews = document.querySelector("#circleOneNews");
let circleTwoNews = document.querySelector("#circleTwoNews");
let circleThreeNews = document.querySelector("#circleThreeNews");

//массив для слайдера в баннере
let arrSlayderNews = new Array();
arrSlayderNews = ["./images/photo_hand2hand.png", "./images/photo_main_slider.png", "./images/photo_russel_hugs.png", "./images/photo_command.png"];

let numSlideNews = 0;

//функция перелистывания слайдера вперед
function flippingNextNews() {
    if (numSlideNews<3) {
        numSlideNews++;
    }else{
        numSlideNews = 0;
    }
    for (let i = 0; i < arrSlayderNews.length; i++) {
        if (numSlideNews == i) {
            slayderNews.style.backgroundImage = "url(" + arrSlayderNews[i] + ")";   
            if(i == 0){
                circleZeroNews.classList.add('indicatorBlue');
                circleZeroNews.classList.remove('indicatorWhite');
            } else{
                circleZeroNews.classList.add('indicatorWhite');
                circleZeroNews.classList.remove('indicatorBlue');
            }
            if(i == 1){
                circleOneNews.classList.add('indicatorBlue');
                circleOneNews.classList.remove('indicatorWhite');
            } else{
                circleOneNews.classList.add('indicatorWhite');
                circleOneNews.classList.remove('indicatorBlue');
            }
            if(i == 2){
                circleTwoNews.classList.add('indicatorBlue');
                circleTwoNews.classList.remove('indicatorWhite');
            } else{
                circleTwoNews.classList.add('indicatorWhite');
                circleTwoNews.classList.remove('indicatorBlue');
            }
            if(i == 3){
                circleThreeNews.classList.add('indicatorBlue');
                circleThreeNews.classList.remove('indicatorWhite');
            } else{
                circleThreeNews.classList.add('indicatorWhite');
                circleThreeNews.classList.remove('indicatorBlue');
            }
        }
    }
}

//функция перелистывания слайдера назад
function flippingBackNews(){
    if (numSlideNews>0) {
        numSlideNews--;
    }else{
        numSlideNews = 3;
    }
    for (let i = 0; i < arrSlayderNews.length; i++) {
        if (numSlideNews == i) {
            slayderNews.style.backgroundImage = "url(" + arrSlayderNews[i] + ")";   
        }
        if(i == 0){
            circleZeroNews.classList.add('indicatorBlue');
            circleZeroNews.classList.remove('indicatorWhite');
        } else{
            circleZeroNews.classList.add('indicatorWhite');
            circleZeroNews.classList.remove('indicatorBlue');
        }
        if(i == 1){
            circleOneNews.classList.add('indicatorBlue');
            circleOneNews.classList.remove('indicatorWhite');
        } else{
            circleOneNews.classList.add('indicatorWhite');
            circleOneNews.classList.remove('indicatorBlue');
        }
        if(i == 2){
            circleTwoNews.classList.add('indicatorBlue');
            circleTwoNews.classList.remove('indicatorWhite');
        } else{
            circleTwoNews.classList.add('indicatorWhite');
            circleTwoNews.classList.remove('indicatorBlue');
        }
        if(i == 3){
            circleThreeNews.classList.add('indicatorBlue');
            circleThreeNews.classList.remove('indicatorWhite');
        } else{
            circleThreeNews.classList.add('indicatorWhite');
            circleThreeNews.classList.remove('indicatorBlue');
        }
    }  
}

//Паттерны
let namePattern = /^[A-ZА-Я][a-zа-я-]*$/;
let surnamePattern = /^[A-ZА-Я][a-zа-я()\-]*$/;
let patronymicPattern = /^[A-ZА-Я][a-zа-я]*$/;
let dateBurnPattern = /^\d{2}\.\d{2}\.\d{4}$/;
let phonePattern = /^(\+7|8)\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//Проверка формы регистрации
function validateFormRegister() {
    let formRegister = document.querySelector("#formRegister");

    let nameRegister = document.querySelector("#nameRegister");
    let surnameRegister = document.querySelector("#surnameRegister");
    let patronymicRegister = document.querySelector("#patronymicRegister");
    let dateBurnRegister = document.querySelector("#dateBurnRegister");
    let phoneRegister = document.querySelector("#nameRegister");
    let emailRegister = document.querySelector("#emailRegister");
    let passwordRegister = document.querySelector("#passwordRegister");
    let passwordConfirmRegister = document.querySelector("#passwordConfirmRegister");

    if (nameRegister.value === "") { // проверка на заполнение поля имени
        alert("Для продолжения вам необходимо написать своё Имя");
        nameRegister.classList.add("mistake"); //изменение цвета при ошибке
    }   else {
        nameRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (!nameRegister.value.match(namePattern)) { //проверка на соответствие верного написания имени
        alert("Имя может быть написано с заглавной буквы, с помощью кириллицы или латиницы. Использование других символов, кроме тире, не допускается");
        nameRegister.classList.add("mistake");
        return false;   // для того, чтобы отменить отправку
    } else {
        nanameRegisterme.classList.remove("mistake");
    }

    if (surnameRegister.value === "") { // проверка на заполнение поля имени
        alert("Для продолжения вам необходимо написать свою фамилию");
        surnameRegister.classList.add("mistake"); //изменение цвета при ошибке
    }   else {
        surnameRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (!surnameRegister.value.match(surnamePattern)) { //проверка на соответствие верного написания фамилии
        alert("Фамилия может быть написана с заглавной буквы, с помощью кириллицы или латиницы. Использование других символов, кроме тире или скобок, не допускается");
        surnameRegister.classList.add("mistake");
        return false;   
    } else {
        surnameRegister.classList.remove("mistake");
    }

    if (!patronymicRegister.value === "") { // если поле заполнено - проверка
        if (!patronymicRegister.value.match(patronymicPattern)) { //проверка на соответствие верного написания отчества
            alert("Напишите свое отчество при помощи кириллицы или латиницы без дополнительных символов");
            patronymicRegister.classList.add("mistake");
            return false;   
        } else {
            patronymicRegister.classList.remove("mistake");
        }
    } 

    if (dateBurnRegister.value === "") { // проверка на заполнение поля имени
        alert("Для продолжения вам необходимо указать дату рождения");
        dateBurnRegister.classList.add("mistake"); //изменение цвета при ошибке
    }   else {
        dateBurnRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (!dateBurnRegister.value.match(dateBurnPattern)) { //проверка на соответствие верного написания даты рождения
        alert("Введите дату рождения в формате: дд.мм.гггг");
        dateBurnRegister.classList.add("mistake");
        return false;   
    } else {
        dateBurnRegister.classList.remove("mistake");
    }

    if (phoneRegister.value === "") { // проверка на заполнение поля имени
        alert("Для продолжения вам необходимо ввести номер телефона");
        phoneRegister.classList.add("mistake"); //изменение цвета при ошибке
    }   else {
        phoneRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (!phoneRegister.value.match(phonePattern)) { //проверка на соответствие верного написания номера телефона
        alert("Неверно введен номер");
        phoneRegister.classList.add("mistake");
        return false;   
    } else {
        phoneRegister.classList.remove("mistake");
    }

    if (emailRegister.value === "") { // проверка на заполнение поля имени
        alert("Для продолжения вам необходимо ввести номер телефона");
        emailRegister.classList.add("mistake"); //изменение цвета при ошибке
    }   else {
        emailRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (!emailRegister.value.match(emailPattern)) { //проверка на соответствие верного написания электронного адреса email
        alert("Неверно введен email");
        emailRegister.classList.add("mistake");
        return false;   
    } else {
        emailRegister.classList.remove("mistake");
    }

    if (passwordRegister.value === "") { // проверка на заполнение поля пароля
        alert("Для продолжения вам необходимо придумать пароль не менее чем из 8ми символов, на латинице и с обязательным содержанием минимум одной цифры и одной буквы");
        passwordRegister.classList.add("mistake"); //изменение цвета при ошибке
    }   else {
        passwordRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (!passwordRegister.value.match(passwordPattern)) { //проверка на соответствие верного написания электронного адреса email
        alert("Неверно введен пароль");
        passwordRegister.classList.add("mistake");
        return false;   
    } else {
        passwordRegister.classList.remove("mistake");
    }

    if (passwordConfirmRegister.value === "") { // проверка на заполнение поля проверки пароля
        alert("Для продолжения вам необходимо подтвердить введенный пароль");
        passwordConfirmRegister.classList.add("mistake"); //изменение цвета при ошибке
    }   else {
        passwordConfirmRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (passwordRegister.value !== passwordConfirmRegister.value) { // проверка для пароля
        alert("Пароль и подтверждение пароля не совпадают");
        passwordRegister.classList.add("mistake");
        passwordConfirmRegister.classList.add("mistake");
        return false;
    } else {
        passwordRegister.classList.remove("mistake");
        passwordConfirmRegister.classList.remove("mistake");
    }

    formRegister.addEventListener("submit", function(event) { // вызов после события нажания кнопки отправки формы
    if (!validateForm()) { // проверка на валидность, если форма вернула false - форма не отправляется
        event.preventDefault();
    }
})
}

//код для сортировки

function sortDate() {
    let newsContainer = document.querySelector('#newsContainer'); // контейнер для новостей
    let news = Array.from(document.querySelectorAll(".blockNews")); // добавить блоки новостей в массив

    // Сортируем элементы новостей по дате
    news.sort((a, b) => {
        let dateA = new Date(a.getAttribute('data-date')); // Преобразуем дату первой новости
        let dateB = new Date(b.getAttribute('data-date')); // Преобразуем дату второй новости
        return dateB - dateA; // Сортируем по убыванию даты
    });

    // Очищаем контейнер и добавляем отсортированные элементы
    newsContainer.innerHTML = ''; // Очищаем содержимое контейнера
    news.forEach(item => {
        newsContainer.appendChild(item); // Добавляем отсортированные элементы обратно в контейнер
    });
}

function collectionFilter(collection) {//атрибут - колекция категорий новостей
    let news = document.querySelectorAll(".blockNews"); // добавить блоки новостей в массив
    console.log(news)
    news.forEach(newsInContainer => {
        let newsAll = newsInContainer.getAttribute('data-collection');
        if (newsAll === collection || collection === 'all') {
            newsInContainer.style.display = 'flex';
        } else {
            newsInContainer.style.display = 'none';
        }
    });
}