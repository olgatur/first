"use strict";

let age = document.getElementById('age');
  
function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    //document.write(`Пользователь ${surname} ${name} , его возраст ${age.value}`);
}
console.log(showUser.apply(age));

//showUser("Snow", "Alex", age);
