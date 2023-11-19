'use strict'

// const block = document.querySelector('.block');

// const searchBlock = document.createElement('div');
// block.appendChild(searchBlock);
// searchBlock.setAttribute('class', 'item');
// searchBlock.textContent = 'lorem';
// searchBlock.style.color = 'blue';
// searchBlock.style.border = 'solid 1px #000';
// searchBlock.style.backgroundColor = '#f8f8f8';
// searchBlock.style.padding = '16px';

// // searchBlock.classList.add('item_1');

// searchBlock.setAttribute('class', 'item item_1');0

// const paragrText = document.querySelector('p.text');
// console.log(paragrText.parentElement.querySelector('h2'));
// console.log(paragrText.closest('.content'));
// console.log(document.querySelector('img'));
// console.log(paragrText.closest('.elem'));

// const header = document.querySelector('h2');

// function printParent(header) {
//     let parElement = header;
//     while (parElement.parentElement) {
//         parElement = parElement.parentElement;
//         console.log(parElement);
//     }
// }

// printParent(header);

const btn = document.querySelector('form').querySelector('.btn');
const inpBlock = btn.previousElementSibling;
const warning = document.createElement('h2');
warning.textContent = 'вы не заполнили поле ввода';

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!inpBlock.value) {
        btn.parentElement.appendChild(warning);
        inpBlock.style.border = '1px solid red';
    }
});