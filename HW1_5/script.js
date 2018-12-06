"use strict";

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

//Получение кнопки 'Начать расчет' через id
let btn = document.createElement('button'),
    textInBtn = document.createTextNode('Начать расчет');
    btn.id = 'myUniqueID';

    btn.appendChild(textInBtn);
    document.body.insertBefore(btn, document.body.firstChild);
    
   
//Получение кнопки 'Утвердить'
let btnAdopt = document.createElement('button'),
    textAdopt = document.createTextNode('Утвердить');
    
    btnAdopt.appendChild(textAdopt);
    document.body.insertBefore(btnAdopt, document.body.secondChild);
    
//Получение кнопки 'Рассчитать'
let btnCaculate = document.createElement('button'),
    textCalculate = document.createTextNode('Рассчитать');
        
    btnCaculate.appendChild(textCalculate);
    document.body.insertBefore(btnCaculate, document.body.secondChild);
        
    