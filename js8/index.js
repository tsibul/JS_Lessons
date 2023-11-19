'use strict'

const addButton = document.createElement('button');
addButton.textContent = 'добавить новый';
const deleteButton = document.createElement('button');
deleteButton.textContent = 'удалить первый';
const addClassButton = document.createElement('button');
addClassButton.textContent = 'добавить класс';
const body = document.querySelector('body');
body.appendChild(addButton);
body.appendChild(deleteButton);
body.appendChild(addClassButton);
const newElement = document.createElement('li');
newElement.textContent = 'новый элемент списка';
const ul = document.querySelector('ul');

addButton.addEventListener('click', () => {
    ul.appendChild(newElement.cloneNode(true));
});

deleteButton.addEventListener('click', () => {
    ul.querySelector('li').remove();
});
addClassButton.addEventListener('click', (e) => {
    if (!e.target.classList.contains('click')) {
        e.target.classList.add('click');
    }
});