// - створити функцію яка виводить масив
newArray = [];
function createArray() {
    for (i = 0; i < 10; i++){
        let value = Math.round(Math.random()*10);
        newArray[i] = value;
    }
    return newArray;
}

console.log(createArray());



// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function createArrayRandom() {
    return createArray();
}
console.log(createArrayRandom());

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function minValue(a, b, c) {
 return Math.min(a, b, c);
}
console.log(minValue(60,12,18));
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function maxValue(a, b, c) {
    return Math.max(a, b, c);
}
console.log(maxValue(60,12,18));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
newArray = [];
function minReturn() {
    console.log(arguments);
for (let i = 0; i < arguments.length; i++){
   newArray.push(arguments[i]);
}
    console.log(Math.max(... arguments));
    return Math.min(... arguments);
}
minReturn(20, 16, 18, 2, 29, 10, 14, 28);
console.log(minReturn(100, 10, 1000, 20, 200, 2000, 5));
// - створити функцію яка виводить масив
function makeArray() {
    let newArray =[];
    for (each of arguments){
        newArray.push(each)
    }
    return newArray;
}
console.log(makeArray(20, 12, 16, 6, 42, 19 ));
// - створити функцію яка повертає найбільше число з масиву
function makeMaxArray() {
    let newArray =[];
    for (each of arguments){
        newArray.push(each)
    }
    return Math.max(... newArray);
}
console.log(makeMaxArray(20, 12, 16, 6, 42, 19 ));

// - створити функцію яка повертає найменьше число з масиву
function makeMinArray() {
    let newArray =[];
    for (each of arguments){
        newArray.push(each)
    }
    return Math.min(... newArray);
}
console.log(makeMinArray(20, 12, 16, 6, 42, 19 ));
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
let newArray = 0;
function addNumbers() {
    let Array = [];
    for (each of arguments){
        Array.push(each);
        newArray += each;
    }
    return console.log(newArray);
}
addNumbers(10, 20, 30, -80, 120);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let newArray = 0;
function addNumbers() {
    let Array = [];
    for (each of arguments){
        Array.push(each);
        newArray += each;
    }
    return console.log(newArray/arguments.length);
}
addNumbers(10, 20, 30, 40, 100, -20);
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
function countArguments() {
    return console.log(arguments.length);
}
countArguments({name: 'Ivar',age: 25}, {series: 'Vikings', episodes: 100});
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function countFields() {
    let fields = 0;
    for (item of arguments){
        let countArrays = (Object.values(item));
        fields += countArrays.length;
    }
    return console.log(fields)
}
countFields({city: "Lviv", country: "Ukraine"},
    {city: "Warsaw", country: "Poland"},
    {city: "Prague", country: "Czech"},
    {city: "Berlin", country: "Germany", population: "80 mln"});
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let firstArray = [25, 35, 45, 80];
let secondArray = [-12, -21, -14, -19];
function sumArray(a, b) {
    let newArray = [];
    for (i = 0; i < a.length; i++) {
        newArray.push(a[i] + b[i]);
    }
    return console.log(newArray);
}
sumArray(firstArray, secondArray);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function addText() {
    let someBlock = document.createElement('div');
    someBlock.innerText = "Hello owu"
    document.body.appendChild(someBlock);
}
addText();
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addText(type, text) {
    let someBlock = document.createElement(type);
    someBlock.innerText = text;
    document.body.appendChild(someBlock);
}
addText('p','I hope it will work corectly' );
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
let vehicles = [
    {model: 'Ford', year: 2015, power: 2.5, color: 'red'},
    {model: 'Toyota', year: 2018, power: 2.0, color: 'white'},
    {model: 'Mercedes', year: 2005, power: 2.8, color: 'black'},
    {model: 'BMW', year: 2010, power: 2.2, color: 'darkgrey'},
    {model: 'Lada', year: 1966, power: 1.3, color: 'rusty'},
    {model: 'WolksVagen', year: 2014, power: 1.5, color: 'brown'},
    {model: 'Smart', year: 2019, power: 1.2, color: 'pink'},
    {model: 'Electron', year: 2020, power: 12.5, color: 'yellow'},
    {model: 'Tesla', year: 2013, power: 1.7, color: 'silver'},
    {model: 'Hummer', year: 2012, power: 5.5, color: 'purple'},
];

function cars (car, id) {
    for (each of car){
        let container = document.createElement('div');
        container.id = id;
        container.innerText = Object.values(each);
        document.body.appendChild(container);
        console.log(each);
        for (every of Object.values(each)){
            let block = document.createElement('div');
            block.innerText = every;
            container.appendChild(block)
         }
    }
}
cars(vehicles, 'Car');
//
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let vehicles = [
    {id: 1, model: 'Ford', year: 2015, power: 2.5, color: 'red'},
    {id: 2, model: 'Toyota', year: 2018, power: 2.0, color: 'white'},
    {id: 3, model: 'Mercedes', year: 2005, power: 2.8, color: 'black'},
    {id: 4, model: 'BMW', year: 2010, power: 2.2, color: 'darkgrey'},
    {id: 5, model: 'Lada', year: 1966, power: 1.3, color: 'rusty'},
    {id: 6, model: 'WolksVagen', year: 2014, power: 1.5, color: 'brown'},
    {id: 7, model: 'Smart', year: 2019, power: 1.2, color: 'pink'},
    {id: 8, model: 'Electron', year: 2020, power: 12.5, color: 'yellow'},
    {id: 9, model: 'Tesla', year: 2013, power: 1.7, color: 'silver'},
    {id: 10, model: 'Hummer', year: 2012, power: 5.5, color: 'purple'},
];
function changePosition(anyArray, index){
    // console.log(anyArray[index])
    anyArray.splice(index, 0, anyArray[index+1])
    anyArray.splice(index+2, 1)
    return console.log(anyArray)
}
changePosition(vehicles, 1)
changePosition(vehicles, 3)
// // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
let array = [];
let zerosArray = [];
let countZero = 0;
let arrayLength = Math.round(Math.random() * 98) + 2;
console.log(arrayLength)
function awayZeros(){
    for (let i = 0; i < arrayLength ; i++) {
        let number = Math.floor(Math.random() * 3);
        if (number === 0){
            zerosArray.push(number);
            countZero += 1;
        }else {
            array[i - countZero] = number;
        }
    }
    for (each of zerosArray){
        array[array.length]  = each;
    }
    console.log(array);
    console.log(zerosArray)
}
awayZeros();
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//(на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
usersWithCities = [];
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},];
let usersSities = [];
function combineArrays() {
    for (let i = 0; i < usersWithId.length; i++){
        for (let j = 0; j < citiesWithId.length; j++){
            if (usersWithId[i].id === citiesWithId[j].user_id){
                usersWithId[i].address = citiesWithId[j];
            }
        }
        usersSities.push(usersWithId[i])
    }
    console.log(usersSities);
}
combineArrays();

//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
