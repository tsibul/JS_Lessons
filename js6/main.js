    /* <div id="block">
                                                                                                                                                    	<p>1</p>
                                                                                                                                                    	<p>2</p>
                                                                                                                                                    </div>
                                                                                                                                                    Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
                                                                                                                                                    Получите ссылку на первый абзац с классом www. и вывести его в консоль
                                                                                                                                                    <p class="www">text 1</p>
                                                                                                                                                    <p class="www">text 2</p> */
    'use strict'

    // const firstP = document.querySelector('#block');
    // console.log(firstP);
    // const firstWww = document.querySelector('.p');
    // console.log(firstWww);


    // Дан тег <a class="link" href="#">link text html</a>
    // Вам необходимо поменять текст внутри ссылки на “link text js”
    // Заменить href, на значение https://developer.mozilla.org/ru/ 
    // Дан тег <img class="photo" src="" alt=""> 
    // Вам необходимо с помощью js поменять значение src на любое изображение из интернета


    // const link = document.querySelector('.link');
    // link.textContent = 'link text js';
    // link.href = 'https://developer.mozilla.org/ru/';
    // const img = document.querySelector('.photo');
    // img.src = 'http://www.vikivostok.ru/nimages/Pens/Automat/Classic/_800/101_0101.jpg';
    // img.alt = 'scolkovo';

    //     Дан тег <div class="content"></div> 
    // Создайте новый элемент p
    // Добавьте в него текст “Новый текстовый элемент”
    // Добавьте созданный элемент внутри <div class="content"></div>
    // Удалите добавленный узел

    // const content = document.querySelector('.content');
    // const buttonAdd = document.querySelector('.add');
    // const buttonRemove = document.querySelector('.remove');

    // buttonAdd.addEventListener('click', () => {
    //     const paragraph = document.createElement('p');
    //     content.appendChild(paragraph);
    //     paragraph.textContent = 'Новый текстовый элемент';
    // });
    // buttonRemove.addEventListener('click', () => {
    //     const paragraph = content.querySelector('p');
    //     paragraph.remove();
    // });
    //  Создать элемент button, добавить в блок <div class="content"></div>
    // При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

    const content = document.querySelector('.content');
    const buttonSend = document.querySelector('.send');
    const buttonPar = document.querySelector('.par');

    buttonSend.addEventListener('click', () => {
        buttonSend.textContent = `Текст отправлен`;
        buttonSend.removeEventListener();
    });
    buttonPar.addEventListener('mousedown', () => {
        let paragraph = content.querySelector('p');
        if (paragraph) {
            paragraph.remove();
        } else {
            paragraph = document.createElement('p');
            content.appendChild(paragraph);
            paragraph.textContent = 'Новый текстовый элемент';
        }
    });