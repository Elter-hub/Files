//==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
// ==============================================
function DescribeTag(properties, tagName, actions, b_attributeName, b_attributeActions, c_attributeName, c_attributeActions,  ) {
    this.properties = properties;
    this.tagName = tagName;
    this.actions = actions;
    this.array = [{name: b_attributeName, acts: b_attributeActions} ,
                  {name: c_attributeName, acts: c_attributeActions}];
}
let a = new DescribeTag('Clickable', '<a>', 'Тег <a> является одним из важных элементов HTML ' +
    'и предназначен для создания ссылок. ',   'href',
    'Задает адрес документа, на который следует перейти.', 'rel','Отношения' +
    ' между ссылаемым и текущим  документами',  );
console.log(a);

let div = new DescribeTag('Block', '<div>', 'выделения фрагмента документа с целью изменения' +
    ' вида содержимого', 'align', 'Задает выравнивание содержимого тега',
    'title', 'Добавляет всплывающую подсказку к содержимому.');
console.log(div);

let h1 = new DescribeTag('Only one', '<h1>', 'наиболее важный заголовок первого уровня',
    'id', 'Указывает имя стилевого идентификатора.', 'dir',
    'Задает направление и отображение текста ');
console.log(h1);

let span = new DescribeTag(null, '<span>', 'предназначен для определения строчных элементов',
    'hidden', 'Скрывает содержимое элемента от просмотра.', 'class',
    'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
console.log(span);

let input = new DescribeTag(null, '<input>', 'позволяет создавать разные элементы интерфейса и ' +
    'обеспечить взаимодействие с пользователем', 'accept',
    'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
    'alt','Альтернативный текст для кнопки с изображением.');
console.log(input);

let form = new DescribeTag(null, '<form>', 'устанавливает форму на веб-странице',
    'name', 'target','Имя формы.','alt','Имя окна или фрейма,' +
    ' куда обработчик будет загружать возвращаемый результат.');
console.log(form);

let option = new DescribeTag(null, '<option>', "определяет отдельные пункты списка, создаваемого " +
    "с помощью контейнера select>",'value','Указание метки пункта ' +
    'списка.','value','Значение пункта списка, которое будет отправлено на сервер или ' +
    'прочитано с помощью скриптов.');
console.log(option);

let select = new DescribeTag('idk', '<select>', "позволяет создать элемент интерфейса в виде" +
    " раскрывающегося списка" ,'size','Количество отображаемых' +
    ' строк списка.','required','Список обязателен для выбора перед отправкой формы.',);
console.log(select);

//
//
// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
// ==============================================

class AboutTags {
    constructor(name, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2 ) {
        this.name = name;
        this.action = action;
        this.array = [{name: titleOfAttr1, actions: actionOfAttr1},
                     {name: titleOfAttr2, actions: actionOfAttr2}]
    }
}
let a = new AboutTags( '<a>', 'Тег <a> является одним из важных элементов HTML ' +
    'и предназначен для создания ссылок. ',   'href',
    'Задает адрес документа, на который следует перейти.', 'rel','Отношения' +
    ' между ссылаемым и текущим  документами',  );
console.log(a);

let div = new AboutTags('<div>', 'выделения фрагмента документа с целью изменения' +
    ' вида содержимого', 'align', 'Задает выравнивание содержимого тега',
    'title', 'Добавляет всплывающую подсказку к содержимому.');
console.log(div);

let h1 = new AboutTags('<h1>', 'наиболее важный заголовок первого уровня',
    'id', 'Указывает имя стилевого идентификатора.', 'dir',
    'Задает направление и отображение текста ');
console.log(h1);

let span = new AboutTags( '<span>', 'предназначен для определения строчных элементов',
    'hidden', 'Скрывает содержимое элемента от просмотра.', 'class',
    'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
console.log(span);

let input = new AboutTags('<input>', 'позволяет создавать разные элементы интерфейса и ' +
    'обеспечить взаимодействие с пользователем', 'accept',
    'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
    'alt','Альтернативный текст для кнопки с изображением.');
console.log(input);

let form = new AboutTags( '<form>', 'устанавливает форму на веб-странице',
    'name', 'target','Имя формы.','alt','Имя окна или фрейма,' +
    ' куда обработчик будет загружать возвращаемый результат.');
console.log(form);

let option = new AboutTags('<option>', "определяет отдельные пункты списка, создаваемого " +
    "с помощью контейнера select>",'value','Указание метки пункта ' +
    'списка.','value','Значение пункта списка, которое будет отправлено на сервер или ' +
    'прочитано с помощью скриптов.');
console.log(option);

let select = new AboutTags( '<select>', "позволяет создать элемент интерфейса в виде" +
    " раскрывающегося списка" ,'size','Количество отображаемых' +
    ' строк списка.','required','Список обязателен для выбора перед отправкой формы.',);
console.log(select);//


// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
let car = {
    model: "CRV",
    manufacturer: "Toyota",
    year: 2018,
    maxSpeed: 200,
    volume: 2.2
}
car.drive = function drive() {
    return console.log('Driving at the speed of ' + this.maxSpeed + 'km per hour');

}
car.drive()

car.info = function info() {
       return console.log((car));
}

car.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed;
    return console.log(`${this.maxSpeed} is your maximum speed now`)
}
car.increaseMaxSpeed(100);

car.changeYear = function changeYear(newValue) {
    this.year = newValue;
    return console.log(`Now your car is made in ${newValue}`)
}
car.changeYear(2010);

car.addDriver = function addDriver(name, experience) {
   car.addDriver = {name: name, experience: experience};
}
car.addDriver('Vlad', '6years')

car.info();
//
//
// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//

function CarFactory(model, year, maxSpeed, volume) {
    this.model = model;
    this.year =  year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
}

let bmv = new CarFactory('X6', 2015, 230, 3.0);
bmv.drive = function drive() {
    return console.log('Driving at the speed of ' + this.maxSpeed + 'km per hour');
}
bmv.drive()
console.log(bmv);

bmv.info = function info() {
       return console.log((bmv));
}

bmv.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed;
    return console.log(`${this.maxSpeed} is your maximum speed now`)
}
bmv.increaseMaxSpeed(100);

bmv.changeYear = function changeYear(newValue) {
    this.year = newValue;
    return console.log(`Now your bmv is made in ${newValue}`)
}
bmv.changeYear(2010);

bmv.addDriver = function addDriver(name, experience) {
   bmv.addDriver = {name: name, experience: experience};
}
bmv.addDriver('Vanya', '10 years')

bmv.info();
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
class MakeCar {
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
}
let reno = new MakeCar('megane', 'France','2012', 210, 2.1);
console.log(reno);
reno.drive = function drive() {
    return console.log('Driving at the speed of ' + this.maxSpeed + 'km per hour');
}
reno.drive()
console.log(reno);

reno.info = function info() {
       return console.log((reno));
}

reno.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed;
    return console.log(`${this.maxSpeed} is your maximum speed now`)
}
reno.increaseMaxSpeed(100);

reno.changeYear = function changeYear(newValue) {
    this.year = newValue;
    return console.log(`Now your reno is made in ${newValue}`)
}
reno.changeYear(2010);

reno.addDriver = function addDriver(name, experience) {
   reno.addDriver = {name: name, experience: experience};
}
reno.addDriver('Vanya', '10 years')

console.log(reno)
// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let first = new Cinderella('Amy', 17, 36.1)
let second = new Cinderella('Nancy', 18, 36.2)
let third = new Cinderella('Ema', 19, 36.3)
let four = new Cinderella('Rita', 20, 36.4)
let fife = new Cinderella('Vika', 21, 36.5)
let six = new Cinderella('Nina', 22, 36.6)
let seven = new Cinderella('Olya', 23, 36.7)
let eight = new Cinderella('Yulia', 24, 36.8)
let nine = new Cinderella('Jane', 25, 36.9)
let last = new Cinderella('Lida', 26, 37)

let array = [first, second, third, four, fife, six, seven, eight, nine, last];

class Prince {
    constructor(name, age, findedBootSize) {
        this.name = name;
        this.age = age;
        this.boot = findedBootSize;
    }
}
let guy = new Prince('John', 22, 36.8);
for (whichOne of array) {
    if (whichOne.footSize === guy.boot){
        console.log(`${guy.name} should be with ${whichOne.name}`);
    }

}
// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
function Cinderella(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
}
let first = new Cinderella('Amy', 17, 36.1)
let second = new Cinderella('Nancy', 18, 36.2)
let third = new Cinderella('Ema', 19, 36.3)
let four = new Cinderella('Rita', 20, 36.4)
let fife = new Cinderella('Vika', 21, 36.5)
let six = new Cinderella('Nina', 22, 36.6)
let seven = new Cinderella('Olya', 23, 36.7)
let eight = new Cinderella('Yulia', 24, 36.8)
let nine = new Cinderella('Jane', 25, 36.9)
let last = new Cinderella('Lida', 26, 37)

let array = [first, second, third, four, fife, six, seven, eight, nine, last];

function Prince(name, age, findedBootSize, findCinderella) {
        this.name = name;
        this.age = age;
        this.boot = findedBootSize;
        this.findCinderella = function FindCinderella(findCinderella) {
            for (let some of array){
                if (some.footSize === findedBootSize){
                    console.log(`Cinderella is ${some.name}`)
                }
            }
        }
}
let guy = new Prince('John', 22, 36.2, array);
guy.findCinderella()