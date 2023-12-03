'use strict'

const catalogInfo = `[
    {"image": "image/catalog/men_1.png",
    "alt": "men_1",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},
    {"image": "image/catalog/women_2.png",
    "alt": "women_2",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},
    {"image": "image/catalog/men_3.png",
    "alt": "men_3",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},
    {"image": "image/catalog/men_4.png",
    "alt": "men_4",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},
    {"image": "image/catalog/women_5.png",
    "alt": "women_5",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},
    {"image": "image/catalog/women_6.png",
    "alt": "women_6",
    "name": "ELLERY X M'O CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"}
]`

const catalogData = JSON.parse(catalogInfo)
const catalog = document.querySelector('.catalog');

const itemShadow = `
<div class="item-shadow">

    <div class="shadow-img">
        <img src="image/icon/cart.png" alt="cart">&nbsp;&nbsp;Add to Cart
    </div>
</div>
`

function createItem(image, alt, name, description, price) {
    const newItem = document.createElement('a');
    newItem.setAttribute('href', '#');
    newItem.classList.add('item');
    newItem.insertAdjacentHTML('afterbegin', itemShadow);
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
    catalog.appendChild(createItem(e.image, e.alt, e.name, e.description, e.price));
});