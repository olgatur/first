"use strict";


let menu = document.querySelector('.menu'),
    mn = document.getElementsByTagName('li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    prompter = document.getElementById('prompt'),
    li = document.createElement('li'),
    lii = document.createElement('li'),
    colm = document.querySelectorAll('.column'),
    answer = prompt ('Как Вы относитесь к технике Apple? ', '');
    
li.classList.add('menu-item'); //добавляем имя 5-го класса
menu.appendChild(li); // добавляем 5-ый класс

menu.replaceChild(mn[1], mn[2]); //перемещение 2-го пункта на место 3-го
lii.classList.add('menu-item'); //добавляем имя 2-го класса
menu.insertBefore(lii, mn[1]); //добавляем 2-ой класс

mn[1].innerHTML = 'Второй пункт'; //добавляем текст во 2-ой пункт 
mn[4].innerHTML = 'Пятый пункт';

//меняем картинку заднего фона
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.innerHTML = 'Мы продаем только подлинную технику Apple'; // Меняем текст заголовка

colm[1].removeChild(adv); //удаление класса adv

prompter.textContent = answer; //Выводим ответ пользователя на страницу


