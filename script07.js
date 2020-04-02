//Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
let gb = +prompt("Введите объем флешки в Гб");
const CONSTANTfile = 820;
const CONSTANTgb = gb * 1024;
let result = CONSTANTgb / CONSTANTfile;
alert(parseInt(result) + " " + "файлов помещается на флешку");