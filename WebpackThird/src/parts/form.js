function form() {
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
                    statusMessage.innerHTML = message.success;
                })
                .catch(()=> statusMessage.innerHTML = message.failure)
                .then(clearInput)
        });
    }

    sendForm(form);
    sendForm(formBottom);
    //Валидация
    let phone = document.querySelectorAll('[type="tel"]');
    console.log(phone);

    for (let i = 0; i < phone.length; i++) {
        phone[i].addEventListener('input', function () {
            phone[i].value = phone[i].value.replace(/[^0-9+]/g, "");
        });
    }
}

module.exports = form;