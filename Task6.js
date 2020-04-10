// - создать массив с 20 числами.
let array = [16, 17, 1, 2,10, 11, 12, 3, 4, 5, 6, 7, 8, 9,  13, 14, 15,  18, 19, 20];
// -- при помощи метода sort отсортировать массив.
let incrementingOrder = array.sort((a, b) => a - b)
console.log(incrementingOrder)
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let decrementingOrder = array.sort(function (a, b) {
    return b - a;})
console.log(decrementingOrder)
// -- при помощи filter получить числа кратные 3
let divByThree = array.filter(function (num) {
    if (num % 3 === 0) {
        return num
    }
})
console.log(divByThree)
// -- при помощи filter получить числа кратные 10
let divByTen = array.filter(function (num) {
    if (num % 10 === 0) {
        return num
    }
})
console.log(divByTen)
// -- перебрать (проитерировать) массив при помощи foreach()
let numbers = array.forEach(function (num) {
     return console.log(num)
})

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//

let map = array.map(function (num) {
    return num * 3;
})
console.log(map)
// - создать массив со словами на 15-20 элементов.
let words = ['if', 'any', 'other', 'else', 'some', 'new', 'every', 'lot', 'little', 'one', 'eye', 'lip', 'it', 'old', 'year', 'bot']
// -- отсортировать его по алфавиту в восходящем порядке.
let sort = words.sort()
console.log(sort)
// -- отсортировать его по алфавиту  в нисходящем порядке.
let minus = words.sort().reverse();
console.log(minus);
// -- отфильтровать слова длиной менее 4х символов
let short = words.filter(function (word) {
    if (word.length <= 4){
        return word;
    }
})
console.log(short)
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let exclamation = words.map(function (word) {
    return word + '!'
})
console.log(exclamation)

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
let youngest = users.sort(function (a , b) {
    return a.age - b.age;
})
console.log(youngest);

let oldest = users.sort(x, y, function (x ,y ) {
    return y.age - x.age;
})
console.log(oldest);
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let shortestName = users.sort(function (a, b) {
    return a.name.length - b.name.length
})
console.log(shortestName);

let longestName = users.sort(function (a, b) {
    return b.name.length - a.name.length
})
console.log(longestName);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу
// його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let newUsers = [];
for (let i = 0; i < users.length; i++){
    users[i].id = users.length - i;
    newUsers.push(users[i])
}
console.log(newUsers)

// - відсортувати його за індентифікатором

let sortById = newUsers.sort(function (user1, user2) {
    return user1.id - user2.id
})
console.log(sortById)
// -- наисать функцию калькулятора с 2мя числами и колбеком

function calculateTwo(a, b, callback) {
    console.log(callback(a, b));
}

calculateTwo(20, 30, function (a, b) {
    return a**2 - b**2
})

// -- наисать функцию калькулятора с 3мя числами и колбеком
//
function calculateThree(a, b, c, callback) {
    console.log(callback(a, b, c));
}
calculateThree(20, 30, 15,function (a, b, c) {
    return a**2 - b**2 + c**3
})
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




let cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

let engineFilter = cars.filter((car) =>{
    if(car.volume >= 3){
        return console.log(car)
    }
})
// - двигун = 2л
let engine = cars.filter((car) =>{
    if(car.volume === 2){
        return console.log(car)
    }
})
// - виробник мерс
let mers = cars.filter((car) =>{
    if(car.producer === 'mercedes'){
        return console.log(car)
    }
})
// - двигун більше 3х літрів + виробник мерседес
let mersBig = cars.filter((car) =>{
    if(car.producer === 'mercedes' && car.volume >= 3){
        return console.log(car)
    }
})
// - двигун більше 3х літрів + виробник субару
let subaru = cars.filter((car) =>{
    if(car.producer === 'subaru' && car.volume >= 3){
        return console.log(car)
    }
})
// - сили більше ніж 300
let horsePower = cars.filter((car) => {
    if (car.power > 300){
        return console.log(car);
    }
})
// - сили більше ніж 300 + виробник субару
let horsePower = cars.filter((car) => {
    if (car.power > 300 && car.producer === 'subaru'){
        return console.log(car);
    }
})
// - мотор серіі ej
let engFilter = cars.filter((car) => {
    if (car.engine.includes('ej')){
        return console.log(car);
    }
})
// - сили більше ніж 300 + виробник субару + мотор серіі ej
let filterHorsePower = cars.filter((car) => {
    if (car.power > 300 && car.producer === 'subaru' && car.engine.includes('ej')){
        return console.log(car);
    }
})
// - двигун меньше 3х літрів + виробник мерседес
let mersBig = cars.filter((car) =>{
    if(car.producer === 'mercedes' && car.volume < 3){
        return console.log(car)
    }
})
// - двигун більше 2л + сили більше 250 виробник бмв

let filterHorsePower = cars.filter((car) => {
    if (car.power > 250 && car.producer === 'bmw' && car.volume > 3){
        return console.log(car);
    }
})

// - взять слдующий массив
let usersWithAddress = [
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'aShevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'bShevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'cShevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'dShevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'eShevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'fShevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'zShevchenko', number: 121}},
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'nShevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'kShevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'jShevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}]
   // -- отсортировать его по id пользователей

let sortPeoples = usersWithAddress.sort((function (user1, user2) {
    return user1.id - user2.id;
}))
console.log(sortPeoples);
// -- отсортировать его по id пользователей в обратном опрядке
let sortLatest = usersWithAddress.sort((function (user1, user2) {
    return user2.id - user1.id;
}))
console.log(sortLatest);
// -- отсортировать его по возрасту пользователей
let sortAge = usersWithAddress.sort(function (age1, age2) {
    return age1.age - age2.age
})
console.log(sortAge);
// -- отсортировать его по возрасту пользователей в обратном порядке
let sortYear = usersWithAddress.sort(function (age1, age2) {
    return age2.age - age1.age
})
console.log(sortYear);
// -- отсортировать его по имени пользователей
function compare( a, b ) {
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
    return 0;
}

console.log(usersWithAddress.sort(compare));

// -- отсортировать его по имени пользователей в обратном порядке
function compare( a, b ) {
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
    return 0;
}

console.log(usersWithAddress.sort(compare).reverse());
// -- отсортировать его по названию улицы  в алфавитном порядке
function compare( a, b ) {
    if ( a.address.street < b.address.street ){
        return -1;
    }
    if ( a.address.street > b.address.street ){
        return 1;
    }
    return 0;
}

console.log(usersWithAddress.sort(compare));
// -- отсортировать его по номеру дома по возрастанию
let sortNumber = usersWithAddress.sort(function (num1, num2) {
    return num1.address.number - num2.address.number
})
console.log(sortNumber)
// -- отфильтровать (оставить) тех кто младше 30

let young = usersWithAddress.filter(function (a) {
    if (a.age < 30){
        return a;
    }
})
console.log(young)
// -- отфильтровать (оставить) тех у кого отрицательный статус
let negative = usersWithAddress.filter(function (a) {
    if (a.status === false){
        return a;
    }
})
console.log(negative)
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let negativeYoung = usersWithAddress.filter(function (a) {
    if (a.status === false && a.age < 30){
        return a;
    }
})
console.log(negativeYoung)
// -- отфильтровать (оставить) тех у кого номер дома четный
let evenNumber = usersWithAddress.filter(function (a) {
    if (a.address.number % 2 === 0){
        return a;
    }
});
console.log(evenNumber);

//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let cars = [
    {model: "wrx", power: 400, owner: {name: "Petr", age: 22, exp: 5}, price: 20000, year: 2018},
    {model: "app", power: 410, owner: {name: "Ivan", age: 51, exp: 25},price: 19000, year: 2019},
    {model: "del", power: 420, owner: {name: "Alex", age: 20, exp: 1}, price: 18000, year: 2020},
    {model: "ask", power: 430, owner: {name: "Roma", age: 22, exp: 4}, price: 17000, year: 2014},
    {model: "tip", power: 440, owner: {name: "Nina", age: 19, exp: 6}, price: 22000, year: 2016},
    {model: "rip", power: 450, owner: {name: "Oleg", age: 18, exp: 8}, price: 23000, year: 2010},
    {model: "let", power: 460, owner: {name: "Igor", age: 28, exp: 4}, price: 24000, year: 2018},
    {model: "art", power: 470, owner: {name: "Rita", age: 30, exp: 2}, price: 28000, year: 2019},
    {model: "pat", power: 480, owner: {name: "Pavel", age: 35, exp: 1},price: 10000, year: 2008}];

let improvement = cars.filter((value, index) =>{
    if (index % 2 === 0){
        value.power = Math.round(value.power * 1.1);
        value.price = Math.round(value.price * 1.05);
        return value;
    }
})
console.log(improvement)
let courses = cars.filter(value => {
    if (value.owner.exp < 5 && value.owner.age > 25){
        value.owner.exp += 1;
        console.log(`${value.owner.name} experience is increased by 1 and now is ${value.owner.exp}`)
    }
    return value;
})
console.log(courses)

let sum = cars.reduce(function (accumulator, currentValue) {
    currentValue = currentValue.price;
    accumulator += currentValue;
    return accumulator;
}, 0)
console.log(sum);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// minM
// Пример:
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let arr = [1, 2, 3, 4, 4, 4, 10, 10, 10, 4, 7, 7, 10, 9, 14];

function minMax(digit) {
    console.log(`Min index of ${digit} is ${arr.indexOf(digit)}`)
    console.log(`Max index of ${digit} is ${arr.length - 1 - arr.indexOf(digit)}`)
}
minMax(7);

