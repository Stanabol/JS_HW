// Запросите у пользователя радиус окружности и выведите площадь такой окружности.
let radius = +prompt("Введите радиус окружности");
const CONSTANT = 3.14;
let area = CONSTANT * (radius * radius);
alert(`Площадь окружности = ${area}`);