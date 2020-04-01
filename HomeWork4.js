// 1- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно
// присутствовать только 1 раз в одном объекте )

let object1 = {name: 'Ihor',surname: 'Denys',age: 25};
let object2 = {wheels: 4,doors: 'two',gas: true};
let object3 = {country: 'Ukraine',capital: 'Kyiv',river: 'Dnipro'};
let object4 = {search: 'google',video: 'youtube', social: 'facebook'};
let object5 = {meat: 'knife', soup: 'spoon', noodles: 'spoon'};

// 2- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний
// объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let square = {width: 20, height: 20, area: { first: 'width' * 'height', second: 'height^2' }, functions: ['area', 'perimeter']};
let loops = {for: {second: 'for of', third: 'for in'}, while: {first: 'while', last: 'do while'}, basic: ['basic', 'methods']};
let laptop  = {mouse: {left: 'point finger', rigth: 'middle finger'}, keyboard: ["touchpad", 'keys']};
let room = {windows: {quantity: 1, color: 'white'}, lamps: ['ceiling', 'desk']};
let garage  = { car: false, tools: ['screwdriver', 'mallet', 'scissors', 'etc'], door: {manual: 'use your hands', remote: 'push the button'}};

// 3- При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (keys in object1){
    document.write(keys);
}
for (keys in object3){
    console.log(keys);
}
for (keys in loops){
    console.log(keys);
}
for (keys in garage){
    console.log(keys);
}
for (keys in object5){
    console.log(keys);
}
// 4- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log(Object.keys(object2));
console.log(Object.keys(object4));
console.log(Object.keys(room));
console.log(Object.keys(laptop));
console.log(Object.keys(square));
// 5- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
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
// 6- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
let capitals = [
    { name: 'Praha', population: '4 millions', country: "Czech Republic", region: 'Center Europe' },
    { name: 'Kyiv', population: '5 millions', country: "Ukraine", region: 'West Europe' },
    { name: 'Moscow', population: '10 millions', country: "Russia", region: 'East Asia' }
];
// 7- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let cars = [
    {model: 'WolksVagen', year: 2014, power: 1.5, color: 'brown', driver: {name: 'Ivan', age: 22, sex: 'male', exp: 2 + 'years'}},
    {model: 'Smart', year: 2019, power: 1.2, color: 'pink',driver: {name: 'Vasya', age: 18, sex: 'male', exp: 0 + 'years'}},
    {model: 'Electron', year: 2020, power: 12.5, color: 'yellow',driver: {name: 'Vika', age: 38, sex: 'female', exp: 20 + 'years'}},
];
// 8- проитерировать каждый массив из задания 5,6,7 при помощи while.
let count = 0;
while (count < vehicles.length){
    document.write(`${vehicles[count].model} - ${vehicles[count].year} - ${vehicles[count].power} - ${vehicles[count].color}`);
    document.write('<br \>');
    count++
}
let cities = 0;
while (cities < capitals.length){
    document.write(`${capitals[cities].name} ${capitals[cities].population} ${capitals[cities].country} ${capitals[cities].region}`);
    document.write('<br \>');
    cities++
}
let threeCars = 0;
while (threeCars < cars.length){
    document.write(`${cars[threeCars].model} ~ ${cars[threeCars].year} ~ ${cars[threeCars].power} ~ ${cars[threeCars].color}
    ~ ${cars[threeCars].driver.name} ~ ${cars[threeCars].driver.age} ~ ${cars[threeCars].driver.exp}`)
    document.write('<br \>');
    threeCars++;
}
// 9- проитерировать каждый массив из задания 5,6,7 при помощи for .
for (scars = 0; scars < vehicles.length; scars++){
    document.write(Object.values(vehicles[scars]))
}
document.write('<br \>');

for (city = 0; city < capitals.length; city++){
    document.write(Object.values(capitals[city]))
}
document.write('<br \>');

for (car = 0; car < cars.length; car++){
    document.write(Object.values(cars[car]))
}
// 10 - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const eachObject of vehicles) {
    document.write(Object.values(eachObject))
}
// 11 - взять объекты из задания 1 и превратить каждый в json.
let object1 = {name: 'Ihor',surname: 'Denys',age: 25};
let object2 = {wheels: 4,doors: 'two',gas: true};
let object3 = {country: 'Ukraine',capital: 'Kyiv',river: 'Dnipro'};
let object4 = {search: 'google',video: 'youtube', social: 'facebook'};
let object5 = {meat: 'knife', soup: 'spoon', noodles: 'spoon'};

let arrayOfObjects = [object1, object2, object3, object4, object5]
let jsonObject = JSON.stringify(arrayOfObjects);
console.log((jsonObject));;

// 12- взять json из задания 11 и превратить их обратно в объекты.
let reverseFunction = JSON.parse(jsonObject);
console.log(reverseFunction);
// 13- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
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
for (let i = 0; i < vehicles.length; i++){
    let transformed = JSON.stringify(vehicles[i]);
    console.log(transformed)
}
// 14- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
let capitals = [
    { name: 'Praha', population: '4 millions', country: "Czech Republic", region: 'Center Europe' },
    { name: 'Kyiv', population: '5 millions', country: "Ukraine", region: 'West Europe' },
    { name: 'Moscow', population: '10 millions', country: "Russia", region: 'East Asia' }
];
for (let i = 0; i < capitals.length; i++){
    let transf = JSON.stringify(capitals[i]);
    console.log(transf)
}
// 15- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let cars = [
    {model: 'WolksVagen', year: 2014, power: 1.5, color: 'brown', driver: {name: 'Ivan', age: 22, sex: 'male', exp: 2 + 'years'}},
    {model: 'Smart', year: 2019, power: 1.2, color: 'pink',driver: {name: 'Vasya', age: 18, sex: 'male', exp: 0 + 'years'}},
    {model: 'Electron', year: 2020, power: 12.5, color: 'yellow',driver: {name: 'Vika', age: 38, sex: 'female', exp: 20 + 'years'}},
];
let carsJson = [];
for (i = 0; i < cars.length; i++){
    carsJson.push(JSON.stringify(cars[i]))
}
console.log(carsJson)




// 16- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// Скопировать все skills всех пользователей в отедльный массив
let users = [
    {name: 'Andrew', age: 35, skills: ['Java', 'JavaScript', 'Python']},
    {name: 'Roman', age: 28, skills: ['Java', 'C#', 'C++']},
    {name: 'Oleg', age: 25, skills: ['C++', 'Java', 'Python']}
    ];
let empty = [];
for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name}, ${users[i].age}, ${users[i].skills}`);
    if (users[i].skills) {
        for (let j = 0; j < users[i].skills.length; j++) {
            users[i][j] = console.log(users[i].skills[j]);
            empty.push((users[i].skills[j]));
        }
    }
}
console.log(empty);


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
let users = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true,skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
    {name: 'olya',  age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];

for (let i = 0; i < users.length; i++) {
        console.log(`${users[i].name}, ${users[i].age}, ${users[i].status}, ${users[i].skills}`)
    if (users[i].skills){
        for (let j = 0; j < users[i].skills.length; j++)
            console.log(users[i].skills[j])
    }
}

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
for (let i = 0; i <users.length;i++){
    let newUser = document.createElement("div");
    newUser.innerText = (`${users[i].name} - ${users[i].age} - ${users[i].status} - ${Object.values(users[i].address)}`);
    document.body.appendChild(newUser)

}
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let emptyArray = [];
for (let i = 0; i < users.length; i++) {
    emptyArray.push(Object.values(users[i].address));
}
console.log(emptyArray);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
for (let i = 0; i <users.length;i++) {
    let newUser = document.createElement("div");
        document.body.appendChild(newUser);
        newUser.innerText = `User ${i}`;
        for (let j = 0; j < Object.keys(users[i]).length; j++) {
            let eachKey = document.createElement("div");
            eachKey.innerText = Object.values(users[i])[j];
            if (j === 3) {
                eachKey.innerText = Object.values(users[i].address);
            }
            newUser.appendChild(eachKey);
        }

}
// ----------------------------------------------------------------------------------------
//
//
//
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (let i = 0; i <users.length;i++) {
    let newUser = document.createElement("div");
    document.body.appendChild(newUser);
    newUser.innerText = `User ${i}`;
    for (let j = 0; j < Object.keys(users[i]).length; j++) {
        let eachKey = document.createElement("div");
        if (Object.keys(users[i])[j] === "address"){
            eachKey.innerText = Object.values(users[i].address);
            for (let k = 0; k < Object.keys(users[i]).length; k++) {
                let location = document.createElement('div');
                location.innerText = Object.values(users[i].address)[k];
                eachKey.appendChild(location);
            }
        } else {
            eachKey.innerText = Object.values(users[i])[j];
        }
        newUser.appendChild(eachKey);
    }
}





// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
    let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
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
usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++){
    for (let j = 0; j < citiesWithId.length; j++){
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].address = citiesWithId[j];
        }
    }
    usersWithCities.push(usersWithId[i]);
}
console.log(Object.values(usersWithCities))




// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
let newUser = document.createElement("div");
    newUser.innerText = "This text should be visible on the page";
    newUser.className = "HardHomework";
    newUser.id = "omgWillItWork???";
    document.body.appendChild(newUser);
let changeByIdentificator = document.getElementById('omgWillItWork???');
changeByIdentificator.style.color = 'green';
let changeByClass = document.getElementsByClassName('HardHomework');
for (each of changeByClass){
    each.style.backgroundColor = 'red';
}
let changeByTag = document.getElementsByTagName('div');
for (every of changeByTag){
    every.style.fontSize = "120px";
}

changeByIdentificator.style.width = "400px";

for (any of changeByClass){
    any.style.height = "800px"
}
for (ment of changeByTag)
    ment.style.padding = "80px"

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
let table = document.createElement('tr');
for (let  i = 0; i < 3; i++) {
    let row = document.createElement('th');
    table.appendChild(row);
}
document.body.appendChild(table);
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
for (let i = 0; i < 10; i++){
    let row = document.createElement('tr');
    row.innerText = `${i} `;
    for (let j = 0; j < 3; j++){
        let column = document.createElement('th');
        column.innerText = ` ${j} `;
        row.appendChild(column);
    }
    document.body.appendChild(row);
}
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
let m = prompt('Enter number of rows');
let n = prompt('Number of rows');

for (let i = 0; i < m; i++){
    let row = document.createElement('tr');
    row.innerText = `${i} `;
    for (let j = 0; j < n; j++){
        let column = document.createElement('th');
        column.innerText = ` ${j} `;
        row.appendChild(column);
    }
    document.body.appendChild(row);
}
// Завантажити з мережі будь-який шаблон сайту.
//     Підключити до нього свій скріпт-файл.
//     У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id

document.querySelectorAll('id')
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
let paragraf = document.getElementsByTagName('p')
for (every of paragraf)
    every.innerText = "hello oktenweb";
//     - знайти всі div та змінити ім колір на червоний
let allDives = document.getElementsByTagName('div');
for (each of allDives){
    each.style.color = "red";
}

// ============
// ====class===
//     ============
//
