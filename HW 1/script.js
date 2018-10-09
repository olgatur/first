"use strict";

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    console.log(money);
    console.log(time);

let appData = {
    budjet:{},
    timeData: {},
    expenses: {},
    optionalExpenses: [],
    income: [],
    savings: false 
};

appData.budjet[money];
appData.timeData[time];

let ans1 = prompt("Введите обязательную статью расходов в этом месяце"),
    ans2 = prompt("Во сколько обойдется?"),
    ans3 = prompt("Введите обязательную статью расходов в этом месяце"),
    ans4 = prompt("Во сколько обойдется?");  

appData.expenses[ans1]=ans2;
appData.expenses[ans3]=ans4;


console.log(money/30);
