"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const arr = createRandomArray(1, 5);
console.log(arr);
console.log(`min array - ${minArray(arr)}`);
console.log(`sum array - ${sumArray(arr)}`);
console.log(indexArray(3, arr));


function createRandomArray(elementnumberDigits, arrayLength) {
    const arr = [];
    for (let i = 0; i < arrayLength; i++) {
        arr.push(Math.floor(Math.random() * 10 ** elementnumberDigits));
    }
    return arr;
}

function sumArray(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function minArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function indexArray(searchNumber, arr) {
    const indexArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchNumber) {
            indexArr.push(i);
        }
    }
    return indexArr;
}