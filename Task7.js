// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let block = document.createElement("div");
let btn = document.createElement("button");
block.id = "text";
block.style.width = "200px";
block.style.height = "200px";
block.style.background = "orange"
btn.innerText = "HideOrangeBlock";
btn.addEventListener("click", function () {
    block.hidden = true;
})
document.body.appendChild(block);
document.body.appendChild(btn);


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn = document.createElement("button");
btn.innerText = "HideYourself";
btn.addEventListener("click", function () {
    btn.hidden = true;
});
document.body.appendChild(btn);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let input = document.createElement("input");
let btn = document.createElement("button");
input.placeholder = "Enter your age";
btn.innerText = "button";
btn.addEventListener("click", function () {
    this.value = input.value;
    if (this.value < 18){
        alert("Entry Forbidden");
    }
})
document.body.appendChild(input);
document.body.appendChild(btn);

// - Создайте меню, которое раскрывается/сворачивается при клике

let container = document.createElement("div");
let list = document.createElement('ul');
list.innerHTML = "menu";
for (let i = 0; i <= 5; i++){
    let item = document.createElement("li");
    item.innerText = `option  ${i}`;
    item.style.display = 'none'
    list.appendChild(item);
}
container.appendChild(list);
document.body.appendChild(container);

list.addEventListener("click", function (e) {
    let elements = document.getElementsByTagName("li");
    console.log(e)
    for (elem of elements){
            if (elem.style.display === 'none'){
                elem.style.display = 'block'
            }
            else {
                elem.style.display = "none";
            }
        }
})


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form = document.createElement("form");
let input1 = document.createElement("input");
let input2 = document.createElement("input");
form.setAttribute("name", "primary");
input1.setAttribute("name", "firstForm");
input2.setAttribute("name", "secondForm");
let button = document.createElement("button");
button.innerText = "Read input";
button.addEventListener('click',  function(e)  {
    console.log(document.forms.primary.firstForm.value, document.forms.primary.secondForm.value)
})

form.appendChild(input1);
form.appendChild(input2);
document.body.appendChild(form);
document.body.appendChild(button);

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

function createTable(rows, columns, typeOfContainer) {
    let table = document.createElement("table");
    table.name = 'table1'
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);

        for (let j = 0; j < columns; j++) {
            let column = document.createElement('td');
            column.innerText = `Row ${i+1} COLUMN  ${j+1}`;
            column.style.border = "2px solid black"
            table.appendChild(column);
        }
    }
    typeOfContainer.appendChild(table);
}
createTable(15, 10, document.body)
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кно9пки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let form = document.createElement('form');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let button = document.createElement('button');

input1.placeholder = "Enter quantity of rows";
input2.placeholder = "Enter quantity of columns";
input3.placeholder = "Enter content of cells";
button.innerText = "Create a table";
function createTable(row, col, content) {
    let table = document.createElement('table');
    for (let i = 0; i < input1.value; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);

        for (let j = 0; j < input2.value; j++) {
            let col = document.createElement('td');;
            col.innerText = input3.value;
            col.style.border = "2px solid black"
            document.createElement('td');
            row.appendChild(col);
        }
    }
    document.body.appendChild(table);
}
button.addEventListener('click', createTable);

form.appendChild(input1)
form.appendChild(input2)
form.appendChild(input3)
document.body.appendChild(form);
document.body.appendChild(button);

// // (Додатковачастина для завдання)
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let btn1 = document.getElementById("btn1");
let images = document.getElementsByTagName("img");


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


const curseWords = ["anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole",
    "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial",
    "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin",
    "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs",
    "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch",
    "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock"]

const input = document.createElement('input');
const btn = document.createElement('button');
btn.innerText = "Check word";
btn.addEventListener('click', function () {
    if (curseWords.includes(input.value)){
        alert('You son of a bitch');
    }
})
document.body.appendChild(input);
document.body.appendChild(btn);


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

const curseWords = ["anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole",
    "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial",
    "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin",
    "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs",
    "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch",
    "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock"]

const input = document.createElement('input');
const btn = document.createElement('button');
btn.addEventListener('click', function () {
    for (word of curseWords) {
        if (input.value.split(" ").includes(word)) {
            alert('DOnt use curse words');
        }
    }
})
btn.innerText = "Check word";
document.body.appendChild(input);
document.body.appendChild(btn);


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
const headers = document.getElementsByTagName("h2");
const content = document.createElement('div');
const rule = document.createElement("a")
for (element of headers){
    rule.innerText = element.innerHTML;
    rule.style.fontSize = "30px";
    rule.href = "#";
    rule.style.textDecoration = "none";
    content.appendChild(rule)
}
document.body.appendChild(content)


// -- взять массив пользователей
let users = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 28, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
const check1 = document.createElement('input');
check1.type = "checkbox";
document.body.appendChild(check1);
const check2 = document.createElement('input');
check2.type = "checkbox";
document.body.appendChild(check2);
const check3 = document.createElement('input');
check3.type = "checkbox";
document.body.appendChild(check3);
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
const result = document.createElement("div");
document.body.appendChild(result)
result.innerText = (JSON.stringify(users))

function checker() {
    if (check1.checked && !check2.checked && !check3.checked) {
        const filterStatus = users.filter(value => value.status === false)
        result.innerText = JSON.stringify(filterStatus)
    }
    else if  (check1.checked && check2.checked && !check3.checked) {
        const filterStatusAge = users.filter(value => value.status === false && value.age > 29)
        result.innerText = JSON.stringify(filterStatusAge);
    }
    else if  (check1.checked && check2.checked && check3.checked){
        const filterStatusAgeCity = users.filter(value => value.status === false && value.age > 29 && value.address.city === "Kyiv")
        result.innerText = JSON.stringify(filterStatusAgeCity)
    }
    else if  (check1.checked && !check2.checked && check3.checked) {
        const filterStatusCity = users.filter(value => value.status === false && value.address.city === "Kyiv")
        result.innerText = JSON.stringify(filterStatusCity)
    }
    else if  (!check1.checked && !check2.checked && check3.checked) {
        const filterCity = users.filter(value => value.address.city === "Kyiv")
        result.innerText = JSON.stringify(filterCity);
    }else if  (!check1.checked && check2.checked && !check3.checked){
        const filterAge = users.filter(value => value.age > 29 )
        result.innerText = JSON.stringify(filterAge)
    }else if  (!check1.checked && check2.checked && check3.checked) {
        const filterAgeCity = users.filter(value => value.address.city === "Kyiv" && value.age > 29)
        result.innerText = JSON.stringify(filterAgeCity);
    }else {
        result.innerText = JSON.stringify(users)
    }
}
check1.addEventListener('click', checker);
check2.addEventListener("click", checker);
check3.addEventListener("click", checker);




// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
