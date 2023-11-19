"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const dayNumber = Number.parseInt(prompt('Введите день месяца'));
if (dayNumber > 0 && dayNumber < 32) {
    const n2 = ((dayNumber - 1) - (dayNumber - 1) % 10) / 10;
    if (n2 < 2) {
        console.log(`Число ${dayNumber} попадает в ${n2 + 1} декаду месяца.`);
    } else {
        console.log(`Число ${dayNumber} попадает в 3 декаду месяца.`);
    }
} else {
    console.log('Неверное значение');
}