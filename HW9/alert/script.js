"use strict";

/*let age = document.getElementById('age');
  
function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    //document.write(`Пользователь ${surname} ${name} , его возраст ${age.value}`);
}
console.log(showUser.apply(age));

//showUser("Snow", "Alex", age);*/


let age = document.getElementById(/*elemented:*/'age');
  
function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value); // this в данном случае -это контекст, на который мы ссылаемся, а
    // тут его нет пока что и, если вызвать эту функцию, то данные никчему не будут привязаны
}

showUser.call(age, /*argArray:*/'Andrey', 50); //при вызове с помощью call или apply мы жестко привязываем функцию к объекту и говорим
//какой контекст вызова у this - в данном случае функция выполняется в контексте age
showUser.call(age, /*argArray:*/'Olya', 20);
showUser.call(age, /*argArray:*/'Igor', 30); 
