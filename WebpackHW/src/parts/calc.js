function calc() {
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
}

module.exports = calc;