'use strict'

// 1
let Tc = prompt('Введите тепературу');
let Tf = (9 / 5) * Tc + 32;
alert (Tf);

// 2
let name = 'Василий'
let admin = name;
console.log(admin);

// 3

/* 
1. 10 + 10 будет 20 и прибваив '10' мы получили '2010' произошло приведение типов
2. 10 + '10' будет '1010' произошло приведение типов после мы опять прибавили 10 и получили '101010'
3. 10 + 10 будет 20 и прибваив +'10' мы получили 30, т.к  +  перед '10' превратил значаение string в number
4. унарный минус делает число отрицательным
5. получилось NaN, во первых числа пишутся без "", во вторых числа с десятичными, сотыми и тысячными должны ограничиваться  . (2.5)   
*/