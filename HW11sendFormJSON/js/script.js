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

    let deadline = '2019-01-10'; //эту дату можно ввести с сервера или спрашивать у пользователя 

  
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

   
    
//    11 УРОК ЛЕКЦИЯ

     // 11 Урок Подключение скрипта отправки данных с формы к модальному окну

    //Form
        let message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...'
        };

        let form = document.getElementsByClassName('main-form')[0],
            formBottom = document.getElementById('form'),
            input = document.getElementsByTagName('input'),
            statusMessage = document.createElement('div');
            statusMessage.classList.add('status'); 

    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault(); // Отменяем перезагрузку страницы
                                // Это событие происходит только тогда, когда форма отправляется
                elem.appendChild(statusMessage);// Оповещаем пользователя как прошел запрос, помещаем новый элемент в форму
                                        //добавляем новый div, который лежит в переменной с названием statusMessage
                
                
                                        let request = new XMLHttpRequest();// создаем запрос для отправки данных на сервер
                                            // в переменную помещаем новый конструктор с объектом XMLHttpRequest();
                request.open('POST', 'server.php');
        
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //эта команда говорит о содержании в контенте(это то,что отправляем на сервер) данных из формы
 /*    
                let formData = new FormData(elem);
                request.send(formData);
  */   
                //Формат JSON 

      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
        let formData = new FormData(form);


        let obj = {}; //Создаем промежуточный объект
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json); 

                request.onreadystatechange = function() { // для наблюдения изменения состояния запроса
                    if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 300) {
                            thanksModal.style.display = 'block';
                            mainModal.style.display = 'none';
                            statusMessage.innerHTML = '';
                        } 
                        else {
                            statusMessage.innerHTML = message.failure;
                        }  
                    }  
                }
        
                for (let i = 0; i < input.length; i++){    //Очищение формы после отправки
                    input[i].value = '';
                }

/*        input.addEventListener('input', function escapeRegExp(string) {
            return string.replace(/^([+]?[0-9\s-\(\)]{3,25})*$/i); // $& means the whole matched string
          });

        //regV = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
       input.addEventListener('input', () => {
        
            
            let r = /([0-9])+/g, arr = input.match(r), res, str = arr.join('');
            if (input.substr(0, 1) === '+') {
                    res = "+" + str;
            } else if (str.substr(0, 1) === '8') {
                    res = "+7" + str.substr(1);
            } else {
                    res = str;
            }
            return res;
        });
        input[i] = phone;
*/    
   
    
           });
    }
sendForm(form);
sendForm(formBottom);
});







