"use strict";

/*
let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false 
};
let ans1 = prompt("Введите обязательную статью расходов в этом месяце"),
    ans2 = prompt("Во сколько обойдется?"),
    ans3 = prompt("Введите обязательную статью расходов в этом месяце"),
    ans4 = prompt("Во сколько обойдется?");  

appData.expenses[ans1]=ans2;
appData.expenses[ans3]=ans4;


alert(appData.budjet/30); 

*/

let arr = [3, 3, 7, 2, 1];
let product = arr.reduce (function(x, y) {
    return x*y
});
console.log(product);

//let product3 = product ** 3;
//alert(product3);