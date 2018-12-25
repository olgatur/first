window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    //Эта функция скрывает все tabContent со страницы
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        } 
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
    
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }    
        }
    });

    // Timer (урок 8)

    let deadline = '2018-12-29'; //эту дату можно ввести с сервера или спрашивать у пользователя 

  
    // Через функцию узнаем промежуток времени до дедлайна 
    // И вычленяем полностью время, часы, минуты, секунды
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    // Пишем функцию, которая превращает статичную верстку в динамическую
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
    
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours < 10 ? "0" + t.hours : t.hours;
            minutes.textContent = t.minutes < 10 ? "0" + t.minutes : t.minutes;
            seconds.textContent = t.seconds < 10 ? "0" + t.seconds : t.seconds;
            
            if (t.total <= 0) {
                timer.innerHTML = '00 : 00 : 00';
                clearInterval(timeInterval);
            }
        }
    } 

    setClock('timer', deadline);


    // Модальное окно (урок 9)

    let more = document.querySelector('.more'), // Получаем кнопку "Узнать больше"
        overlay = document.querySelector('.overlay'), // Блок модального окна
        close = document.querySelector('.popup-close'), // Блок с крестиком
        descriptionBtn = document.getElementsByClassName('description-btn');
        
    more.addEventListener('click', function(){ // При клике на кнопку показывается блок overlay(модальное окно)
        overlay.style.display = 'block';
        this.classList.add('more-splash'); //добавляем новый класс для воспроизведения анимации
        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы как только появляется модальное окно
    });
        
    for (let i = 0; i < descriptionBtn.length; i++){
        descriptionBtn[i].addEventListener('click', function(){ // При клике на кнопку показывается блок overlay(модальное окно)
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы как только появляется модальное окно
        });
    };

    close.addEventListener ('click', function() { //Закрываем модальное окно
        overlay.style.display = 'none';
        more.classList.remove('more-splash'); // удаляем класс
        document.body.style.overflow = ''; // Отменяем запрет прокрутки при нажатии на крестик
    });

   
});    