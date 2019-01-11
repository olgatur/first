function slider() {
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
}

module.exports = slider;