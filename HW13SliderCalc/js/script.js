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

   
    
// 12 УРОК. Promise (переписываем 11 урок с  Promise)

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
        statusMessage.classList.add('status'); //Новому(только созданному) div назначаем класс 

    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault(); // Отменяем перезагрузку страницы
                                // Это событие происходит только тогда, когда форма отправляется

                elem.appendChild(statusMessage);// Оповещаем пользователя как прошел запрос, помещаем новый элемент в форму
                                        //добавляем новый div, который лежит в переменной с названием statusMessage
                let formData = new FormData(elem);
        
                function postData(data) {
                    
                return new Promise(function(resolve,reject) {
                    let request = new XMLHttpRequest();// создаем запрос для отправки данных на сервер
                                            // в переменную помещаем новый конструктор с объектом XMLHttpRequest();
                    request.open('POST', 'server.php');

                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //эта команда говорит о содержании в контенте(это то,что отправляем на сервер) данных из формы

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve()
                            } 
                            else {
                                reject()
                            }
                        }    
                    }
                    request.send(data);
                })

            } // End postData
            
            function clearInput(){
                for (let i = 0; i < input.length; i++){    //Очищение формы после отправки
                input[i].value = '';
                }
            }
           
            postData(formData)
                .then(()=> statusMessage.innerHtml = message.loading)
                .then(()=> {
                    thanksModal.style.display = 'block';
                    mainModal.style.display = 'none';
                    statusMessage.innerHTML = '';
                })
                .catch(()=> statusMessage.innerHTML = message.failure)
                .then(clearInput)
        });
    }

    sendForm(form);
    sendForm(formBottom);


    // 13 УРОК 

    // Slider (этот слайдер взаимодействует только с элементами, но не со стилями)

    let slideIndex = 1, //параметр текущего слайда (т.е. здесь переменная, которая отвечает за тот слайд, который показывается в текущий момент)
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    
    function showSlides(n)  { //Ф-ция показа слайдов, она показывает тот слайд, который мы ей передаем
        
        if (n > slides.length) {//если  n > колличества слайдов, то =1; т.е. если слайды закончились в карусели, то возвращамся к первому
            slideIndex = 1;
        }
        if (n < 1) { //если  n > колличества слайдов, то =1; т.е. если слайды закончились в карусели, то возвращамся к первому
            slideIndex = slides.length; // обратная операция, при таком условии выставляем слайдер в последнюю позицию
        }      
        
        slides.forEach((item) => item.style.display = 'none'); // перебираем слайды(скрываем все и показываем только тот, который нужен), item - это каждый слайд
        // for (let i = 0; i < slides.length; i++) {  //перебираем слайды при помощи цикла
        //    slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active')); // убирает active со всех точек; dot-active этот класс хотим удалить
        
        slides[slideIndex - 1].style.display = 'block';        //в скобках индекс того слайда, который хотим показать;это будет самый первый слайд, т.к. передается 1-1=0 
        dots[slideIndex - 1].classList.add('dot-active'); // как и предыдущая строка, только для точек
    
    }

    function plusSlides(n) { //ф-ция увеличивает параметр slideIndex 
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {    //ф-ция определяет текущий слайд и устанавливает его
        showSlides(slideIndex = n);
    }

    // реализуем стрелки, перемещаемся по слайдам через 1; можно установить через 2, 3, ...

    prev.addEventListener('click',function() { 
        plusSlides(-1);                       //т.е. когда возвращаемся на один слайд назад, это мы от текущего слайда отнимаем 1
    });

    next.addEventListener('click',function() {
        plusSlides(1);                         // увеличиваем слайд на 1, т.е. идем на один слайд вперед
    });

    //Реализуем точки (переключение по-точкам). Используем дилигирование(если слайды будут автоматически добавляться на страницу,
                                                //то будут гинерироваться новые точки  и на них будут висеть эти обработчики событий)

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++ ) {  // при клике на оберткудля точек необходимо перебрать все точки, чтобы узнать на какую из них  кликнули
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    // Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        // Создаем переменные(в которые польз-ль вводит данные) для использования их в расчетах:
        personsSum = 0, // ( ноль - это стартоваое значение)
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;  // можно исп-ать .textContent , т.к. здесь данные приходят с js, не от польз-ля
        
        // Мы должны отслеживать введение польз-лем данных в input, здесь можно исп-ать событие input или соб-е change
        // когда польз-ль что-то вводит, мы получаем value и записываем его в ту переменную, которая нам нужна (personsSum, .....)
        // Далее это зн-ие(personsSum, ...) мы исп-ем в математической формуле и выводим total (т.е. тотальную сумму)
        //Но!! Если второе поле не заполнено, то общая сумма не должна изменяться
        
        persons.addEventListener('change', function() {
            personsSum = +this.value;// при изменении зн-ия input сюда записываем то, что ввел польз-ль в это поле

            total = (daysSum + personsSum)*4000; //обычно, такую форму предоставляет заказчик
            
            if (restDays.value == '' || personsSum !== null) {   
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });
        
        restDays.addEventListener('change', function() {
            daysSum = +this.value;// при изменении зн-ия input сюда записываем то, что ввел польз-ль в это поле
            //daysSum.textContent.toFixed();
            total = (daysSum + personsSum)*4000; //обычно, такую форму предоставляет заказчик
            
            if(persons.value == '' || restDays !== null) {   
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        place.addEventListener('change', function() {
            if(persons.value == '' || restDays.value == '' ) {   
                totalValue.innerHTML = 0;
            } else {
                let a = total; // используе переменную а,чтобы не потерять total
                totalValue.innerHTML = a*this.options[this.selectedIndex].value; //обращаемся к тому элементу (в файле HTML прописаны значения коэф-ов, но здесь мы их по-другому получаем), на который воздействуем сейчас
            
            }
        });      
});