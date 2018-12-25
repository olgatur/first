"use strict";

let age = document.getElementById('age');
  
function showUser(surname, name) {
    //document.write("Пользователь " + surname + " " + name + ", его возраст " + age.value);
    document.write(`Пользователь ${surname} ${name} , его возраст ${age.value}`);

}
 
showUser("Snow", "Alex", age);
