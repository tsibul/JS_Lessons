// const dataInfo = `[{
//         "id": "ACURA",
//         "name": "Acura",
//         "cyrillic-name": "Акура",
//         "popular": false,
//         "country": "Япония",
//         "models": [{
//                 "id": "ACURA_CL",
//                 "name": "CL",
//                 "cyrillic-name": "сл",
//                 "class": "D",
//                 "year-from": 1996,
//                 "year-to": 2003
//             },
//             {
//                 "id": "ACURA_TSX",
//                 "name": "TSX",
//                 "cyrillic-name": "тсх",
//                 "class": "D",
//                 "year-from": 2003,
//                 "year-to": 2014
//             },
//             {
//                 "id": "ACURA_ZDX",
//                 "name": "ZDX",
//                 "cyrillic-name": "здх",
//                 "class": "E",
//                 "year-from": 2009,
//                 "year-to": 2013
//             }
//         ]
//     },
//     {
//     "id": "ALFA_ROMEO",
//     "name": "Alfa Romeo",
//     "cyrillic-name": "Альфа Ромео",
//     "popular": false,
//     "country": "Италия",
//     "models": [
//       {
//         "id": "ALFA_ROMEO_GT",
//         "name": "GT",
//         "cyrillic-name": "гт",
//         "class": "D",
//         "year-from": 2003,
//         "year-to": 2010
//       },
//
//       {
//         "id": "ALFA_ROMEO_RZ",
//         "name": "RZ",
//         "cyrillic-name": "рз",
//         "class": "S",
//         "year-from": 1992,
//         "year-to": 1994
//       },
//       {
//         "id": "ALFA_ROMEO_SPIDER",
//         "name": "Spider",
//         "cyrillic-name": "Спайдер",
//         "class": "S",
//         "year-from": 1966,
//         "year-to": 2010
//       }]
//  },
//     {
//     "id": "BMW",
//     "name": "BMW",
//     "cyrillic-name": "БМВ",
//     "popular": true,
//     "country": "Германия",
//     "models": [
//            {
//         "id": "BMW_315",
//         "name": "315",
//         "cyrillic-name": "315",
//         "class": "S",
//         "year-from": 1934,
//         "year-to": 1937
//       },
//             {
//         "id": "BMW_321",
//         "name": "321",
//         "cyrillic-name": "321",
//         "class": "",
//         "year-from": 1937,
//         "year-to": 1950
//       },
//             {
//         "id": "BMW_5ER",
//         "name": "5 серии",
//         "cyrillic-name": "5 серии",
//         "class": "E",
//         "year-from": 1972,
//         "year-to": null
//       }
//     ]}
// ]`

// const data = JSON.parse(dataInfo);
// const carModel = data[0].id;
// console.log(data);
// const contentBlock = document.querySelector('.content');
// let carTitle, carProperties, carBlock;
// data.forEach(car => {
//     carBlock = document.createElement('section');
//     carBlock.classList.add('car');
//     carTitle = document.createElement('h4');
//     carTitle.textContent = car.name;
//     carTitle.classList.add('car__header');
//     carBlock.appendChild(carTitle);
//     car.models.forEach(prop => {
//         carProperties = document.createElement('div');
//         carProperties.textContent = `модель ${prop.name} с ${prop['year-from']} года`;
//         carProperties.classList.add('car__text');
//         carBlock.appendChild(carProperties);
//     })
//     contentBlock.appendChild(carBlock)


// });


fetch('https://cars-base.ru/api/cars?full=1')
    .then(response => response.json())
    .then(json => {
        const data = json;
        const contentBlock = document.querySelector('.content');
        let carTitle, carProperties, carBlock;
        data.forEach(car => {
            carBlock = document.createElement('section');
            carBlock.classList.add('car');
            carTitle = document.createElement('h4');
            carTitle.textContent = car.name;
            carTitle.classList.add('car__header');
            carBlock.appendChild(carTitle);
            car.models.forEach(prop => {
                carProperties = document.createElement('div');
                carProperties.textContent = `модель ${prop.name} с ${prop['year-from']} года`;
                carProperties.classList.add('car__text');
                carBlock.appendChild(carProperties);
            })
            contentBlock.appendChild(carBlock)
        });
    });