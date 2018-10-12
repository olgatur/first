"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false 
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
        b = prompt("Во сколько обойдется?", " ");

    if ((typeof(a)) === "string" && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
};

/* While
let i = 0,
    a = prompt("Введите обязательную статью расходов в этом месяце", " "),
    b = prompt("Во сколько обойдется?", " ");

while (i < 2) {    
    ( (typeof(a)) === "string" && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50)
        console.log("done");
        i++;
        appData.expenses[a] = b;
} */
 
/* Do While 
let i = 0; 
let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");
do { ( (typeof(a)) === "string" && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) 
        i++;
        console.log("done");
        appData.expenses[a] = b;
        
}
while (i < 2);   */
            
appData.moneyPerDay = appData.budjet / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
