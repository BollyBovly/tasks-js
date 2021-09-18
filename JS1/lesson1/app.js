'use strict'

// Номер 1
// 1. т.к  a = 1, a  c = 0 и мы бриваляем к  с  префиксную форму значения  а(1) и получили  c = 2 и вернули новое значение  a 

// 2. к  d  прибавили 1 за счет посфиксной формы и вернули старое значение

// 3. ответ 4, из первого задания мы знаем что  c  будет равняться 2, прибавив еще 2 мы получили 4

// b  вернула старое значение 1 и прибавив 2 мы получили 3

// Номер 2
// мы знаем что  а *= 2  это  (a = a * 2),  a  у нас равна 2 и так же мы а умнажаем на 2 получаем 4, и к 4 прибавить 1 получим 5

// Номер 3

let a = -4;
let b = 2;
    
if (a, b > 0) {
    alert(a / b);
}

if (a, b < 0) {
    alert(a * b);
}

if (a > 0 && b < 0 || a < 0 && b > 0) {
    alert(a + b)
}

// Номер 4

let a = 4;
let b = 6;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function division(a, b){
    return a / b;
}

// Номер 5

function mathOperation(arg1, arg2, operation) {
    switch(operation){
        case 'plus':
            return arg1 + arg2;
        case 'minus':
            return arg1 - arg2;
        case 'division':
            return arg1 / arg2;
        case 'multiply':
            return arg1 * arg2;
    }
}