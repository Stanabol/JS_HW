// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
let usd = +prompt("Введите USD");
const CONSTANTUSD = 27.35;
const CONSTANTEUR = 29.65;
let USDtoUAH = (usd * CONSTANTUSD);
let DPH = USDtoUAH * 0.035;
let UAHinEUR = (USDtoUAH - DPH) / CONSTANTEUR;
alert(`При обмене ${usd}$ вы получите ${UAHinEUR.toFixed(2)} Евро. С вычетом налогов в пенсионный фонд и военный сбор.`);
