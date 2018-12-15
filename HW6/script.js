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
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

btnCountBudget.disabled = true;
btnCountBudget.style.background = 'red';

let money, time;

btnStart.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
     }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
}); 

for (let i = 0; i < expensesItem.length; i++) {
    expensesItem[i].addEventListener('input', function() {
        if (expensesItem[0].value == '' || expensesItem[1].value == '' || expensesItem[2].value == '' || expensesItem[3].value == '') {
            btnExpenses.disabled = true;
            btnExpenses.style.background = 'red';
        } else {
            btnExpenses.disabled = false;
            btnExpenses.style.background = 'blue';
        }
    });
};

btnExpenses.addEventListener('click', function(){
    let sum = 0; 
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ((typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
    appData.expenses = sum;
    btnCountBudget.disabled = false;
    btnCountBudget.style.background = 'blue';
});

for (let i = 0; i < optionalExpensesItem.length; i++) {
    optionalExpensesItem[i].addEventListener('input', function() {
        if (optionalExpensesItem[i].value == '' ) {
            btnOptionalExpenses.disabled = true;
            btnOptionalExpenses.style.background = 'red';
        } else {
            btnOptionalExpenses.disabled = false;
            btnOptionalExpenses.style.background = 'blue';
        }
    });
};

btnOptionalExpenses.addEventListener('click', function() { //Выбор необязательных расходов
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let c = optionalExpensesItem[i].value;
        appData.optionalExpenses [i] = c;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    };
});

btnCountBudget.addEventListener('click', function() {
    if (appData.budget != undefined && appData.expenses != undefined) {
        appData.moneyPerDay = ((appData.budget - appData.expenses) / 30).toFixed();

        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if(appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money ,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};   