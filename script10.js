// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
let dep = +prompt("Введите суму вклада");
const twomonth = 0.05 / 12 * 2;
let percent = dep * twomonth;
let result = dep + percent;
alert(`Процентная ставка за два месяца составляет ${twomonth.toFixed(4)}%
За два месяца вы получите ${percent.toFixed(2)}грн от сумы вклада.
Итого:${result.toFixed(2)}грн

Также в нашем банке Вы сможете открыть кредитную карту с лимитом до 50 000грн с льготным периодом на 60 дней.
А если оформите ее сейчас, то получите бесплатное медицинское страхование от несчастных случаев сроком на 1 месяц.`);