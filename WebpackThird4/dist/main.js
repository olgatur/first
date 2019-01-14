/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_calc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/calc.js */ \"./src/parts/calc.js\");\n/* harmony import */ var _parts_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/form.js */ \"./src/parts/form.js\");\n/* harmony import */ var _parts_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/slider.js */ \"./src/parts/slider.js\");\n/* harmony import */ var _parts_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/tabs.js */ \"./src/parts/tabs.js\");\n/* harmony import */ var _parts_timer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/timer.js */ \"./src/parts/timer.js\");\n/* harmony import */ var _parts_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/modal.js */ \"./src/parts/modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', function() {\r\n    Object(_parts_calc_js__WEBPACK_IMPORTED_MODULE_0__[\"calc\"])();\r\n    Object(_parts_form_js__WEBPACK_IMPORTED_MODULE_1__[\"form\"])();\r\n    Object(_parts_slider_js__WEBPACK_IMPORTED_MODULE_2__[\"slider\"])();\r\n    Object(_parts_tabs_js__WEBPACK_IMPORTED_MODULE_3__[\"tabs\"])();\r\n    Object(_parts_timer_js__WEBPACK_IMPORTED_MODULE_4__[\"timer\"])();\r\n    Object(_parts_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"modal\"])();\r\n});   \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calc\", function() { return calc; });\nfunction calc() {\r\n    let persons = document.querySelectorAll('.counter-block-input')[0],\r\n        restDays = document.querySelectorAll('.counter-block-input')[1],\r\n        place = document.getElementById('select'),\r\n        totalValue = document.getElementById('total'),\r\n        // Создаем переменные(в которые польз-ль вводит данные) для использования их в расчетах:\r\n        personsSum = 0, // ( ноль - это стартоваое значение)\r\n        daysSum = 0,\r\n        total = 0;\r\n\r\n        totalValue.innerHTML = 0;  // можно исп-ать .textContent , т.к. здесь данные приходят с js, не от польз-ля\r\n        \r\n        // Мы должны отслеживать введение польз-лем данных в input, здесь можно исп-ать событие input или соб-е change\r\n        // когда польз-ль что-то вводит, мы получаем value и записываем его в ту переменную, которая нам нужна (personsSum, .....)\r\n        // Далее это зн-ие(personsSum, ...) мы исп-ем в математической формуле и выводим total (т.е. тотальную сумму)\r\n        //Но!! Если второе поле не заполнено, то общая сумма не должна изменяться\r\n        \r\n        persons.addEventListener('input', function() {\r\n            personsSum = +this.value;// при изменении зн-ия input сюда записываем то, что ввел польз-ль в это поле\r\n\r\n            total = (daysSum + personsSum)*4000; //обычно, такую форму предоставляет заказчик\r\n            \r\n            if (restDays.value == '' || persons.value == '') {   \r\n                totalValue.textContent = 0;\r\n            } else {\r\n                totalValue.textContent = total;\r\n            }\r\n        });\r\n        \r\n        restDays.addEventListener('input', function() {\r\n            daysSum = +this.value;// при изменении зн-ия input сюда записываем то, что ввел польз-ль в это поле\r\n            total = (daysSum + personsSum)*4000; //обычно, такую форму предоставляет заказчик\r\n            \r\n            if(persons.value == '' || restDays.value == '') {   \r\n                totalValue.textContent = 0;\r\n            } else {\r\n                totalValue.textContent = total;\r\n            }\r\n        });\r\n\r\n        place.addEventListener('change', function() {\r\n            if(persons.value == '' || restDays.value == '' ) {   \r\n                totalValue.textContent = 0;\r\n            } else {\r\n                let a = total; // используе переменную а,чтобы не потерять total\r\n                totalValue.textContent = a*this.options[this.selectedIndex].value; //обращаемся к тому элементу (в файле HTML прописаны значения коэф-ов, но здесь мы их по-другому получаем), на который воздействуем сейчас\r\n            \r\n            }\r\n        });   \r\n        \r\n        persons.addEventListener('keypress', (e) => {\r\n            if (/[^1-9]/.test(e.key)) { //Любой символ кроме диапазона\r\n              e.preventDefault();\r\n            }\r\n          });\r\n          restDays.addEventListener('keypress', (e) => {\r\n            if (/[^1-9]/.test(e.key)) {\r\n              e.preventDefault();\r\n            }\r\n          });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/parts/calc.js?");

/***/ }),

/***/ "./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! exports provided: form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\nfunction form() {\r\n    let message = {\r\n        loading: 'Загрузка...',\r\n        success: 'Спасибо! Скоро мы с вами свяжемся',\r\n        failure: 'Что-то пошло не так...'\r\n    };\r\n\r\n    let form = document.getElementsByClassName('main-form')[0],\r\n        formBottom = document.getElementById('form'),\r\n        input = document.getElementsByTagName('input'),\r\n        statusMessage = document.createElement('div');\r\n        statusMessage.classList.add('status'); //Новому(только созданному) div назначаем класс \r\n\r\n    function sendForm(elem) {\r\n        elem.addEventListener('submit', function(e) {\r\n            e.preventDefault(); // Отменяем перезагрузку страницы\r\n                                // Это событие происходит только тогда, когда форма отправляется\r\n\r\n                elem.appendChild(statusMessage);// Оповещаем пользователя как прошел запрос, помещаем новый элемент в форму\r\n                                        //добавляем новый div, который лежит в переменной с названием statusMessage\r\n                let formData = new FormData(elem);\r\n        \r\n                function postData(data) {\r\n                    \r\n                return new Promise(function(resolve,reject) {\r\n                    let request = new XMLHttpRequest();// создаем запрос для отправки данных на сервер\r\n                                            // в переменную помещаем новый конструктор с объектом XMLHttpRequest();\r\n                    request.open('POST', 'server.php');\r\n\r\n                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //эта команда говорит о содержании в контенте(это то,что отправляем на сервер) данных из формы\r\n\r\n                    request.onreadystatechange = function() {\r\n                        if (request.readyState < 4) {\r\n                            resolve()\r\n                        } else if (request.readyState === 4) {\r\n                            if (request.status == 200 && request.status < 300) {\r\n                                resolve()\r\n                            } \r\n                            else {\r\n                                reject()\r\n                            }\r\n                        }    \r\n                    }\r\n                    request.send(data);\r\n                })\r\n\r\n            } // End postData\r\n            \r\n            function clearInput(){\r\n                for (let i = 0; i < input.length; i++){    //Очищение формы после отправки\r\n                input[i].value = '';\r\n                }\r\n            }\r\n           \r\n            postData(formData)\r\n                .then(()=> statusMessage.innerHtml = message.loading)\r\n                .then(()=> {\r\n                    statusMessage.innerHTML = message.success;\r\n                })\r\n                .catch(()=> statusMessage.innerHTML = message.failure)\r\n                .then(clearInput)\r\n        });\r\n    }\r\n\r\n    sendForm(form);\r\n    sendForm(formBottom);\r\n    //Валидация\r\n    let phone = document.querySelectorAll('[type=\"tel\"]');\r\n    console.log(phone);\r\n\r\n    for (let i = 0; i < phone.length; i++) {\r\n        phone[i].addEventListener('input', function () {\r\n            phone[i].value = phone[i].value.replace(/[^0-9+]/g, \"\");\r\n        });\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/parts/form.js?");

/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modal\", function() { return modal; });\nfunction modal() {\r\n    let more = document.querySelector('.more'), // Получаем кнопку \"Узнать больше\"\r\n        overlay = document.querySelector('.overlay'), // Блок модального окна\r\n        close = document.querySelector('.popup-close'), // Блок с крестиком\r\n        descriptionBtn = document.getElementsByClassName('description-btn');\r\n        \r\n    more.addEventListener('click', function(){ // При клике на кнопку показывается блок overlay(модальное окно)\r\n        overlay.style.display = 'block';\r\n        this.classList.add('more-splash'); //добавляем новый класс для воспроизведения анимации\r\n        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы как только появляется модальное окно\r\n    });\r\n        \r\n    for (let i = 0; i < descriptionBtn.length; i++){\r\n        descriptionBtn[i].addEventListener('click', function(){ // При клике на кнопку показывается блок overlay(модальное окно)\r\n        overlay.style.display = 'block';\r\n        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы как только появляется модальное окно\r\n        });\r\n    };\r\n\r\n    close.addEventListener ('click', function() { //Закрываем модальное окно\r\n        overlay.style.display = 'none';\r\n        more.classList.remove('more-splash'); // удаляем класс\r\n        document.body.style.overflow = ''; // Отменяем запрет прокрутки при нажатии на крестик\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/parts/modal.js?");

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return slider; });\nfunction slider() {\r\n    let slideIndex = 1, //параметр текущего слайда (т.е. здесь переменная, которая отвечает за тот слайд, который показывается в текущий момент)\r\n        slides = document.querySelectorAll('.slider-item'),\r\n        prev = document.querySelector('.prev'),\r\n        next = document.querySelector('.next'),\r\n        dotsWrap = document.querySelector('.slider-dots'),\r\n        dots = document.querySelectorAll('.dot');\r\n\r\n    showSlides(slideIndex);\r\n    \r\n    function showSlides(n)  { //Ф-ция показа слайдов, она показывает тот слайд, который мы ей передаем\r\n        \r\n        if (n > slides.length) {//если  n > колличества слайдов, то =1; т.е. если слайды закончились в карусели, то возвращамся к первому\r\n            slideIndex = 1;\r\n        }\r\n        if (n < 1) { //если  n > колличества слайдов, то =1; т.е. если слайды закончились в карусели, то возвращамся к первому\r\n            slideIndex = slides.length; // обратная операция, при таком условии выставляем слайдер в последнюю позицию\r\n        }      \r\n        \r\n        slides.forEach((item) => item.style.display = 'none'); // перебираем слайды(скрываем все и показываем только тот, который нужен), item - это каждый слайд\r\n        // for (let i = 0; i < slides.length; i++) {  //перебираем слайды при помощи цикла\r\n        //    slides[i].style.display = 'none';\r\n        // }\r\n        dots.forEach((item) => item.classList.remove('dot-active')); // убирает active со всех точек; dot-active этот класс хотим удалить\r\n        \r\n        slides[slideIndex - 1].style.display = 'block';        //в скобках индекс того слайда, который хотим показать;это будет самый первый слайд, т.к. передается 1-1=0 \r\n        dots[slideIndex - 1].classList.add('dot-active'); // как и предыдущая строка, только для точек\r\n    \r\n    }\r\n\r\n    function plusSlides(n) { //ф-ция увеличивает параметр slideIndex \r\n        showSlides(slideIndex += n);\r\n    }\r\n    function currentSlide(n) {    //ф-ция определяет текущий слайд и устанавливает его\r\n        showSlides(slideIndex = n);\r\n    }\r\n\r\n    // реализуем стрелки, перемещаемся по слайдам через 1; можно установить через 2, 3, ...\r\n\r\n    prev.addEventListener('click',function() { \r\n        plusSlides(-1);                       //т.е. когда возвращаемся на один слайд назад, это мы от текущего слайда отнимаем 1\r\n    });\r\n\r\n    next.addEventListener('click',function() {\r\n        plusSlides(1);                         // увеличиваем слайд на 1, т.е. идем на один слайд вперед\r\n    });\r\n\r\n    //Реализуем точки (переключение по-точкам). Используем дилигирование(если слайды будут автоматически добавляться на страницу,\r\n                                                //то будут гинерироваться новые точки  и на них будут висеть эти обработчики событий)\r\n\r\n    dotsWrap.addEventListener('click', function(event) {\r\n        for (let i = 0; i < dots.length + 1; i++ ) {  // при клике на оберткудля точек необходимо перебрать все точки, чтобы узнать на какую из них  кликнули\r\n            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {\r\n                currentSlide(i);\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/parts/slider.js?");

/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabs\", function() { return tabs; });\nfunction tabs() {\r\n    let tab = document.querySelectorAll('.info-header-tab'),\r\n        info = document.querySelector('.info-header'),\r\n        tabContent = document.querySelectorAll('.info-tabcontent');\r\n\r\n    //Эта функция скрывает все tabContent со страницы\r\n    function hideTabContent(a) {\r\n        for (let i = a; i < tabContent.length; i++) {\r\n            tabContent[i].classList.remove('show');\r\n            tabContent[i].classList.add('hide');\r\n        } \r\n    }\r\n\r\n    hideTabContent(1);\r\n\r\n    function showTabContent(b) {\r\n        if (tabContent[b].classList.contains('hide')) {\r\n            tabContent[b].classList.remove('hide');\r\n            tabContent[b].classList.add('show');\r\n        }\r\n    }\r\n\r\n    info.addEventListener('click', function(event) {\r\n        let target = event.target;\r\n        if (target && target.classList.contains('info-header-tab')) {\r\n\r\n            for (let i = 0; i < tab.length; i++){\r\n                if (target == tab[i]) {\r\n                    hideTabContent(0);\r\n                    showTabContent(i);\r\n                    break;\r\n                }\r\n            }    \r\n        }\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/parts/tabs.js?");

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timer\", function() { return timer; });\nfunction timer() {\r\n    let deadline = '2019-01-20'; //эту дату можно ввести с сервера или спрашивать у пользователя \r\n  \r\n    // Через функцию узнаем промежуток времени до дедлайна \r\n    // И вычленяем полностью время, часы, минуты, секунды\r\n    function getTimeRemaining(endtime) {\r\n        let t = Date.parse(endtime) - Date.parse(new Date()),\r\n        seconds = Math.floor((t/1000) % 60),\r\n        minutes = Math.floor((t/1000/60) % 60),\r\n        hours = Math.floor((t/(1000*60*60)));\r\n\r\n        return {\r\n            'total' : t,\r\n            'hours' : hours,\r\n            'minutes' : minutes,\r\n            'seconds' : seconds\r\n        };\r\n    }\r\n\r\n    // Пишем функцию, которая превращает статичную верстку в динамическую\r\n    function setClock(id, endtime) {\r\n        let timer = document.getElementById(id),\r\n            hours = timer.querySelector('.hours'),\r\n            minutes = timer.querySelector('.minutes'),\r\n            seconds = timer.querySelector('.seconds'),\r\n            timeInterval = setInterval(updateClock, 1000);\r\n    \r\n        function updateClock() {\r\n            let t = getTimeRemaining(endtime);\r\n            hours.textContent = t.hours < 10 ? \"0\" + t.hours : t.hours;\r\n            minutes.textContent = t.minutes < 10 ? \"0\" + t.minutes : t.minutes;\r\n            seconds.textContent = t.seconds < 10 ? \"0\" + t.seconds : t.seconds;\r\n            \r\n            if (t.total <= 0) {\r\n                timer.innerHTML = '00 : 00 : 00';\r\n                clearInterval(timeInterval);\r\n            }\r\n        }\r\n    } \r\n\r\n    setClock('timer', deadline);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/parts/timer.js?");

/***/ })

/******/ });