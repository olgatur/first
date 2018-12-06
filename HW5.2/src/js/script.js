"use strict";

let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value') [0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value') [0],
    levelValue = document.getElementsByClassName('level-value') [0],
    expensesValue = document.getElementsByClassName('expenses-value') [0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value') [0],
    incomeValue = document.getElementsByClassName('income-value') [0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value') [0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value') [0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    btnExpenses = document.getElementsByTagName('button') [0],
    btnOptionalExpenses = document.getElementsByTagName('button') [1],
    btnCountBudget = document.getElementsByTagName('button') [2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    persentValue = document.querySelector('.choose-persent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    budget: money ,
     timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {      //Выбор обязательных расходов
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
                b = +prompt("Во сколько обойдется?", " ");
        
            if ((typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() { //Расчет дневного бюджета
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {   //Расчет уровня достатка
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {  //Функция расчета накоплений депозита, если он есть
        if (appData.savings == true) {
            let save =+prompt("Какова сумма накоплений?"),
                percent=+prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {   //Выбор необязательных расходов
        for (let i = 1; i < 4; i++) {
            let c = prompt("Статья необязательных расходов?", " ");
            appData.optionalExpenses [i] = c;
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i ++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '')
            appData.income = items.split(', '); 
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
            if ((typeof(items)) === "string" && (typeof(items)) !=null && items !='') {
                appData.income[items];
            } else {
                i--;
            };   
        };
            appData.income.forEach(function(items, i) {
            alert((i+1) + 'Способы доп. заработка:' + items );
        });

        for (let key in appData) {
            console.log('Наша программа включает в себя данные: ' + key);
        }
    }
};

    