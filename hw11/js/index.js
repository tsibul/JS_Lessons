'use strict'

const catalogInfo = `[
    {"id": "1",
     "image": "image/catalog/men_1.png",
    "alt": "men_1",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},
    {"id": "2",
    "image": "image/catalog/women_2.png",
    "alt": "women_2",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},
    {"id": "3",
    "image": "image/catalog/men_3.png",
    "alt": "men_3",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},
    {"id": "4",
    "image": "image/catalog/men_4.png",
    "alt": "men_4",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},
    {"id": "5",
    "image": "image/catalog/women_5.png",
    "alt": "women_5",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},
    {"id": "6",
    "image": "image/catalog/women_6.png",
    "alt": "women_6",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"}
]`

const catalogData = JSON.parse(catalogInfo);
const catalog = document.querySelector('.catalog');
const cart = document.querySelector('.cart');
let cartCounter = 0;
let currentId, deletedBlock, deletedItem;
const toCart = document.getElementsByClassName('item-shadow');
const closeItem = document.getElementsByClassName('cart-block__item_close');

const itemShadow = `
<div class="item-shadow">

    <div class="shadow-img">
        <img src="image/icon/cart.png" alt="cart">&nbsp;&nbsp;Add to Cart
    </div>
</div>
`
const shoppingItem = `
<div class="cart-block__item id0">
                        <div class="cart-block__item_close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
      </svg>
                        </div>
                        <div class="cart-block__image slider-back">
                            <img src="" alt="">
                        </div>
                        <div class="cart-block__info">
                            <h3 class="cart-block__heading"></h3>
                            <div class="cart-block__text">Price: <span class="pink"></span></div>
                            <div class="cart-block__text">Color: Red</div>
                            <div class="cart-block__text">Size: Xl</div>
                            <div class="cart-block__text cart-block__text_quantity">
                                <div>Quantity:</div>
                                <input type="number" value="2">
                            </div>
                        </div>
                    </div>
`

const cartBlockHTML = `
<div class="container">
<div class="cart-block">
    <div class="cart-block__items">
        <section class="top">
            <div class="top-left top-left__registration">SHOPPING CART</div>
        </section></div>
    <div class="cart-block__deliver"></div>
</div>
</div>
`

function createCartBlock() {
    cart.insertAdjacentHTML('afterbegin', cartBlockHTML);
}

function createCartItem(id) {
    const cartBlock = cart.querySelector('.cart-block__items');
    cartBlock.insertAdjacentHTML('beforeend', shoppingItem);
    const currentCartItem = cartBlock.querySelector('.id0');
    currentCartItem.classList.remove('id0');
    currentCartItem.dataset.id = id;
    const itemData = catalogData.filter(item => item.id === id)[0];
    currentCartItem.querySelector('.cart-block__image').querySelector('img').src = itemData.image;
    currentCartItem.querySelector('.cart-block__image').querySelector('img').alt = itemData.alt;
    currentCartItem.querySelector('.cart-block__heading').textContent = itemData.name;
    currentCartItem.querySelector('.pink').textContent = itemData.price;
    cartCounter++;
}

function createItem(id, image, alt, name, description, price) {
    const newItem = document.createElement('div');
    // newItem.setAttribute('href', '#');
    newItem.classList.add('item');
    newItem.insertAdjacentHTML('afterbegin', itemShadow);
    newItem.querySelector('.item-shadow').dataset.id = id;
    const img = document.createElement('img');
    img.src = image;
    img.alt = alt;
    newItem.appendChild(img);
    const iName = document.createElement('div');
    iName.classList.add('item-name');
    iName.textContent = name;
    newItem.appendChild(iName);
    const iDesc = document.createElement('div');
    iDesc.classList.add('item-description');
    iDesc.textContent = description;
    newItem.appendChild(iDesc)
    const iPrice = document.createElement('div');
    iPrice.classList.add('item-price');
    iPrice.textContent = price;
    newItem.appendChild(iPrice);
    return newItem;
}

catalogData.forEach(e => {
    catalog.appendChild(createItem(e.id, e.image, e.alt, e.name, e.description, e.price));
});

catalog.addEventListener('click', e => {
    if ([...toCart].includes(e.target)) {
        currentId = e.target.dataset.id;
        if (!cartCounter) {
            createCartBlock();
        }
        if (!cart.querySelector(`[data-id = "${currentId}"]`)) {
            createCartItem(currentId);
        }
    }
});

cart.addEventListener('click', e => {
    if ([...closeItem].includes(e.target.closest('div'))) {
        if (cartCounter === 1) {
            deletedBlock = e.target.closest('.container');
            deletedBlock.remove();
            cartCounter = 0
        } else {
            deletedItem = e.target.closest('.cart-block__item');
            deletedItem.remove();
            cartCounter--;
        }

    }
});