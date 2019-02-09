function timer() {
    let deadline = '2019-01-20'; //эту дату можно ввести с сервера или спрашивать у пользователя 
  
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
}

export {timer};