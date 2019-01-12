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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var calc = __webpack_require__(/*! ./parts/calc.js */ "./parts/calc.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./parts/form.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./parts/slider.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./parts/timer.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./parts/modal.js");

  calc();
  form();
  slider();
  tabs();
  timer();
  modal();
});

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      // Создаем переменные(в которые польз-ль вводит данные) для использования их в расчетах:
  personsSum = 0,
      // ( ноль - это стартоваое значение)
  daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0; // можно исп-ать .textContent , т.к. здесь данные приходят с js, не от польз-ля
  // Мы должны отслеживать введение польз-лем данных в input, здесь можно исп-ать событие input или соб-е change
  // когда польз-ль что-то вводит, мы получаем value и записываем его в ту переменную, которая нам нужна (personsSum, .....)
  // Далее это зн-ие(personsSum, ...) мы исп-ем в математической формуле и выводим total (т.е. тотальную сумму)
  //Но!! Если второе поле не заполнено, то общая сумма не должна изменяться

  persons.addEventListener('input', function () {
    personsSum = +this.value; // при изменении зн-ия input сюда записываем то, что ввел польз-ль в это поле

    total = (daysSum + personsSum) * 4000; //обычно, такую форму предоставляет заказчик

    if (restDays.value == '' || persons.value == '') {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = total;
    }
  });
  restDays.addEventListener('input', function () {
    daysSum = +this.value; // при изменении зн-ия input сюда записываем то, что ввел польз-ль в это поле

    total = (daysSum + personsSum) * 4000; //обычно, такую форму предоставляет заказчик

    if (persons.value == '' || restDays.value == '') {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = total;
    }
  });
  place.addEventListener('change', function () {
    if (persons.value == '' || restDays.value == '') {
      totalValue.textContent = 0;
    } else {
      var a = total; // используе переменную а,чтобы не потерять total

      totalValue.textContent = a * this.options[this.selectedIndex].value; //обращаемся к тому элементу (в файле HTML прописаны значения коэф-ов, но здесь мы их по-другому получаем), на который воздействуем сейчас
    }
  });
  persons.addEventListener('keypress', function (e) {
    if (/[^1-9]/.test(e.key)) {
      //Любой символ кроме диапазона
      e.preventDefault();
    }
  });
  restDays.addEventListener('keypress', function (e) {
    if (/[^1-9]/.test(e.key)) {
      e.preventDefault();
    }
  });
}

module.exports = calc;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  var form = document.getElementsByClassName('main-form')[0],
      formBottom = document.getElementById('form'),
      input = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status'); //Новому(только созданному) div назначаем класс 

  function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
      e.preventDefault(); // Отменяем перезагрузку страницы
      // Это событие происходит только тогда, когда форма отправляется

      elem.appendChild(statusMessage); // Оповещаем пользователя как прошел запрос, помещаем новый элемент в форму
      //добавляем новый div, который лежит в переменной с названием statusMessage

      var formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest(); // создаем запрос для отправки данных на сервер
          // в переменную помещаем новый конструктор с объектом XMLHttpRequest();

          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //эта команда говорит о содержании в контенте(это то,что отправляем на сервер) данных из формы

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 300) {
                resolve();
              } else {
                reject();
              }
            }
          };

          request.send(data);
        });
      } // End postData


      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          //Очищение формы после отправки
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        return statusMessage.innerHtml = message.loading;
      }).then(function () {
        statusMessage.innerHTML = message.success;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  }

  sendForm(form);
  sendForm(formBottom); //Валидация

  var phone = document.querySelectorAll('[type="tel"]');
  console.log(phone);

  var _loop = function _loop(i) {
    phone[i].addEventListener('input', function () {
      phone[i].value = phone[i].value.replace(/[^0-9+]/g, "");
    });
  };

  for (var i = 0; i < phone.length; i++) {
    _loop(i);
  }
}

module.exports = form;

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  var more = document.querySelector('.more'),
      // Получаем кнопку "Узнать больше"
  overlay = document.querySelector('.overlay'),
      // Блок модального окна
  close = document.querySelector('.popup-close'),
      // Блок с крестиком
  descriptionBtn = document.getElementsByClassName('description-btn');
  more.addEventListener('click', function () {
    // При клике на кнопку показывается блок overlay(модальное окно)
    overlay.style.display = 'block';
    this.classList.add('more-splash'); //добавляем новый класс для воспроизведения анимации

    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы как только появляется модальное окно
  });

  for (var i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener('click', function () {
      // При клике на кнопку показывается блок overlay(модальное окно)
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы как только появляется модальное окно
    });
  }

  ;
  close.addEventListener('click', function () {
    //Закрываем модальное окно
    overlay.style.display = 'none';
    more.classList.remove('more-splash'); // удаляем класс

    document.body.style.overflow = ''; // Отменяем запрет прокрутки при нажатии на крестик
  });
}

module.exports = modal;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var slideIndex = 1,
      //параметр текущего слайда (т.е. здесь переменная, которая отвечает за тот слайд, который показывается в текущий момент)
  slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    //Ф-ция показа слайдов, она показывает тот слайд, который мы ей передаем
    if (n > slides.length) {
      //если  n > колличества слайдов, то =1; т.е. если слайды закончились в карусели, то возвращамся к первому
      slideIndex = 1;
    }

    if (n < 1) {
      //если  n > колличества слайдов, то =1; т.е. если слайды закончились в карусели, то возвращамся к первому
      slideIndex = slides.length; // обратная операция, при таком условии выставляем слайдер в последнюю позицию
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    }); // перебираем слайды(скрываем все и показываем только тот, который нужен), item - это каждый слайд
    // for (let i = 0; i < slides.length; i++) {  //перебираем слайды при помощи цикла
    //    slides[i].style.display = 'none';
    // }

    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    }); // убирает active со всех точек; dot-active этот класс хотим удалить

    slides[slideIndex - 1].style.display = 'block'; //в скобках индекс того слайда, который хотим показать;это будет самый первый слайд, т.к. передается 1-1=0 

    dots[slideIndex - 1].classList.add('dot-active'); // как и предыдущая строка, только для точек
  }

  function plusSlides(n) {
    //ф-ция увеличивает параметр slideIndex 
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    //ф-ция определяет текущий слайд и устанавливает его
    showSlides(slideIndex = n);
  } // реализуем стрелки, перемещаемся по слайдам через 1; можно установить через 2, 3, ...


  prev.addEventListener('click', function () {
    plusSlides(-1); //т.е. когда возвращаемся на один слайд назад, это мы от текущего слайда отнимаем 1
  });
  next.addEventListener('click', function () {
    plusSlides(1); // увеличиваем слайд на 1, т.е. идем на один слайд вперед
  }); //Реализуем точки (переключение по-точкам). Используем дилигирование(если слайды будут автоматически добавляться на страницу,
  //то будут гинерироваться новые точки  и на них будут висеть эти обработчики событий)

  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      // при клике на оберткудля точек необходимо перебрать все точки, чтобы узнать на какую из них  кликнули
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent'); //Эта функция скрывает все tabContent со страницы

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
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

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  var deadline = '2019-01-10'; //эту дату можно ввести с сервера или спрашивать у пользователя 
  // Через функцию узнаем промежуток времени до дедлайна 
  // И вычленяем полностью время, часы, минуты, секунды

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  } // Пишем функцию, которая превращает статичную верстку в динамическую


  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);
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
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map