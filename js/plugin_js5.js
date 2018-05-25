// ------ Пункт №1 ДЗ. из презентации по функциям сделать 6ю задачу ------
function arrayToString(arr, func) {
    if(!arr.length) new Error('array is empty');
    let str = 'New value: ';
  
    for (let el of arr) {
        str += func(el);
    }
    return str;
}
  
function camelize(elOfArr) {
    strEl = elOfArr.split('');
    strEl[0] = strEl[0].toUpperCase();
    strEl = strEl.join('');
    return strEl;
}
  
function mult(elOfArr) {
    return elOfArr * 10 + ', ';
}

function propObj (elOfArr) {
    return elOfArr.name + ' is ' + elOfArr.age + ', ';
} 

function reverse (elOfArr) {
    return elOfArr = elOfArr.split('').reverse().join('') + ', ';
}

function addNum (elOfArr) {
    return elOfArr = +elOfArr + 5 + ', ';
}

console.log(arrayToString(['my', 'name', 'is', 'Trinity'], camelize));
console.log(arrayToString([10, 20, 30], mult));
console.log(arrayToString([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], propObj));
console.log(arrayToString(['abc', '123'], reverse));
console.log(arrayToString(['1', '2', '3'], addNum));

// ------ Пункт №2 ДЗ. Переписать методы every и some. ------
let users = [
    {
      name: 'Denis',
      age: 29
    },
    {
      name: 'Ivan',
      age: 16
    }
];

let users2 = [
    {
      name: 'Denis',
      age: 17
    },
    {
      name: 'Ivan',
      age: 16
    }
];

let users3 = [];

function every(arr, func) {
    if (!arr.length) return true;
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}
  
let customFilter = every(users, (item, i, arr) => item.age <= 18);
let customFilter2 = every(users2, (item, i, arr) => item.age <= 18);
let customFilter3 = every(users3, (item, i, arr) => item.age <= 18);

console.log(customFilter);
console.log(customFilter2);
console.log(customFilter3);

function some(arr, func) {
    if (!arr.length) return 0;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return true;
        }
    }
 return false;
}
      
customFilter = some(users, (item, i, arr) => item.age >= 18);
customFilter2 = some(users2, (item, i, arr) => item.age >= 18);
customFilter3 = some(users3, (item, i, arr) => item.age >= 18);

console.log(customFilter);
console.log(customFilter2);
console.log(customFilter3);

// ------ Пункт №3 ДЗ. Массивы. ------

// Задача №2 
let numberArr = [2, 4, 7, 1, -2, 10, -9];

numberArr.sort((prev, next) => next - prev);
console.log(numberArr);

// Задача №3
function getNewArray(array, indexStart, indexEnd){
    return array.slice(indexStart, indexEnd + 1);
}
numberArr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(getNewArray(numberArr, 2, 4));
console.log(numberArr);

// Задача №8
let arrayArrays = [[14, 45], [1], ['a', 'c', 'd']];

arrayArrays.sort((prev, next) => prev.length - next.length);
console.log(arrayArrays);

// Задача №10
let arrayObj = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'amd', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'amd', info: {cores: 4, cache: 2}},
];
arrayObj.sort((prev, next) => prev.info.cores - next.info.cores);
console.log(arrayObj);

// Задача №11
const products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15},
    {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},
    {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},
    {title: 'prod8', price: 63}
];

function filterCollection(arr, minPrice, maxPrice){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price >= minPrice && arr[i].price <= maxPrice) {
          newArr.push(arr[i]);
        }
      }
      return newArr.sort((prev, next) => prev.price - next.price);
}
console.log(filterCollection(products, 15, 30));

let filterCollection1 = (arr, minPrice, maxPrice) => arr.filter(arr => arr.price >= minPrice && arr.price <= maxPrice).sort((prev, next) => prev.price - next.price);

console.log(filterCollection1(products, 15, 30));

// ------ Пункт №4 ДЗ. Массивы Es5. ------

// Задача №2
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let getNewArrayDigitOdd = arrNum.map(num => { 
    let obj = {digit: num, odd: num % 2 ? true : false }; 
    return obj;
});

console.log(getNewArrayDigitOdd);

// Задача №5
let letters = [
    {char: "a", index: 12},
    {char: "w", index: 8},
    {char: "Y", index: 10},
    {char: "p", index: 3},
    {char: "p", index: 2},
    {char: "N", index: 6},
    {char: " ", index: 5},
    {char: "y", index: 4},
    {char: "r", index: 13},
    {char: "H", index: 0},
    {char: "e", index: 11},
    {char: "a", index: 1},
    {char: " ", index: 9},
    {char: "!", index: 14},
    {char: "e", index: 7}
];

function combineLetters (arr) {
    return arr.sort((prev, next) => prev.index - next.index).reduce((prevVal, currentItem) => prevVal + currentItem.char, '');
}
console.log(combineLetters(letters));

let combineLetters1 = (arr) => arr.sort((prev, next) => prev.index - next.index).reduce((prevVal, currentItem) => prevVal + currentItem.char, '');
console.log(combineLetters1(letters));

// Решение задачи без использования сортировки и reduce.
function combineLetters2 (arr) {
    let newStr = [];
    for(let i = 0; i < arr.length; i++){
        newStr[arr[i].index] = arr[i].char;
    }
    return newStr.join('');
}
console.log(combineLetters2(letters));


