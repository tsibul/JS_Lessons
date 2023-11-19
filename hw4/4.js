"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

simbolMount('x9[oxo', 20);

function simbolMount(simbol, rows) {
    const simbolChar = simbol.toString().slice()[0];
    let strOut = '';
    for (let i = 0; i < rows; i++) {
        strOut = strOut + simbolChar;
        console.log(strOut);
    }
}