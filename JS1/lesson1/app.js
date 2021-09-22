'use strict'

/**
 * если число четное то оно подпишется, если оно нечетное то оно тоже поджпишется, нуль так же подпишется  
 * @param {number} i счетчик до 10 включительно, начинас с 0 прибавляя по 1 
*/


// Пример 1
for (let i = 0; i <= 10; i++) {
    if(i == 0) {
        console.log(' - это ноль');
    } else if (i % 2 == 0) {
        console.log(i + ' - четное число');
    } else {
        console.log(i + ' - нечетное число');
    } 
    
}
// почему нуль не выводится в консоль??


// Пример 2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }   
        },
    ]
};

console.log(post.author); 
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Прмер 3
/**
 * с помощью forEach перебираем массив, находим цену и добавляем скидку каждому товару
 */


const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function(discount) {
    return discount.price = discount.price - discount.price / 100 * 15;
})

console.log(products);

// Пример 4

/**
 * Функция получает все товары с фотографиями с помощью filter, затем сорирует товары по цене с помощью sort
 * @param {number}
 */

const products = [
    {
        id: 3,
        price: 127,
        photos: [
        "1.jpg",
        "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
        "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let searchPhotos = products.filter(function(element) {
    return element.photos && element.photos.length >= 1;
});

let upPrice = products.sort(function(elem1,  elem2){
    return elem1.price - elem2.price;
});

console.log(upPrice);
console.log(searchPhotos);


// Пример 6

for(let x = 0; x <= 20; x++) {
    let str = "";
    for(let y = 0; y <= x; y++) {
        str += "*";
    }
    console.log(str);
}
