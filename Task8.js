// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
const input = document.createElement('input');
document.body.appendChild(input);
input.oninput = () => {
    localStorage.setItem('input', input.value);
}
input.value = localStorage.getItem('input');

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
let name = document.getElementById('upper');
name.oninput = () => localStorage.setItem('Name', name.value);
name.value = localStorage.getItem('Name')
let surName = document.getElementById('middle');
surName.oninput = () => localStorage.setItem('Surname', surName.value);
surName.value = localStorage.getItem('Surname')
let info = document.getElementById('lower');
info.oninput = () => localStorage.setItem('Info', info.value);
info.value = localStorage.getItem('Info')

let tellAge = document.getElementById('first')
tellAge.onclick = () =>{
    if (!tellAge.checked){
        let ageForm = document.getElementById('yourAge');
        ageForm.parentNode.removeChild(ageForm)
    }else {
        let typeAge = document.createElement("input");
        typeAge.placeholder = "Enter your age";
        typeAge.id = 'yourAge'
        document.body.appendChild(typeAge);
        typeAge.oninput = () => {
            localStorage.setItem('age', typeAge.value)
        }
        typeAge.value = localStorage.getItem('age')
    }
}
let tellStatus = document.getElementById('second');
tellStatus.onclick = function() {
    if (!tellStatus.checked){
        let statusForm = document.getElementById('yourStatus');
        statusForm.parentNode.removeChild(statusForm);
    }else {
        let selectStatus = document.createElement("select");
        selectStatus.id = 'yourStatus';

        let option1 = document.createElement("option");
        option1.text = 'single';
        let option2 = document.createElement("option");
        option2.text = "married";
        selectStatus.appendChild(option1)
        selectStatus.appendChild(option2)
        document.body.appendChild(selectStatus)
        selectStatus.onclick = () => {
            localStorage.setItem('Status', selectStatus.value)
        }
        selectStatus.value = localStorage.getItem('Status')
        console.log(selectStatus)
    }
}
let advertisement = document.getElementById('clickBait');
advertisement.onclick = () => {
    localStorage.setItem('annoyingAdd', advertisement.value)
}
advertisement.value = localStorage.getItem('annoyingAdd')

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let textArea = document.createElement("textarea");
let button = document.createElement("button");
let prev = document.createElement("button");
let next = document.createElement("button");
prev.innerText = "<";
next.innerText = ">";
document.body.appendChild(prev);
document.body.appendChild(next);
let index = localStorage.getItem('Something');
console.log(index)
button.innerText = 'Save data';
button.onclick = () => {
    let fromLS = JSON.parse(localStorage.getItem('Something'));
    console.log(fromLS)
    if (Array.isArray(fromLS) && localStorage.getItem('Something') != null){
        fromLS.push(textArea.value);
        localStorage.setItem('Something', JSON.stringify(fromLS))
    }else {
        let text = [];
        text.push(textArea.value);
        localStorage.setItem('Something', JSON.stringify(text));
        console.log(textArea.value, text)
    }
}
document.body.appendChild(textArea);
document.body.appendChild(button);
let i = JSON.parse(localStorage.getItem('Something')).length
prev.onclick = () => {
    let arrayFromLocal = JSON.parse(localStorage.getItem('Something'))
    if (i > 0) {
        i--;
        textArea.value = arrayFromLocal[i];
        console.log(index[i])
    }
}
next.onclick = () => {
    let arrayFromLocal = JSON.parse(localStorage.getItem('Something'))
    if (i !== undefined) {
        i++;
        textArea.value = arrayFromLocal[i];
        console.log(index)
    }
}


console.log(localStorage.getItem('Something'));

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.t
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

function User(name, surname, fatherName, number, postCode, firm, division, birthday) {
    this.name = name;
    this.surname = surname;
    this.fatherName = fatherName;
    this.number = number;
    this.postCode = postCode;
    this.firm = firm;
    this.division = division;
    this.birthday = birthday;
}
let nameOfUser = document.getElementById('Name');
let surnameOfUser = document.getElementById('Surname');
let fatherNameOfUser = document.getElementById('FatherName');
let numberOfUser = document.getElementById('Number');
let postCOdeOfUser = document.getElementById('PostCode');
let firmOfUser = document.getElementById('Firm');
let divisionOfUser = document.getElementById('Division');
let birthdayOfUser = document.getElementById('Birthday');
let createUser = document.getElementById('createUser');
let form = document.getElementById('forma');

form.style = "position:absolute; right: 30px; top: 20px; background: gray; width: 20%; padding: 20px";

createUser.onclick = (ev) => {
    ev.preventDefault()
    let contentOfLocalStorage = JSON.parse(localStorage.getItem("users"));

    let visitor = new User(nameOfUser.value, surnameOfUser.value, fatherNameOfUser.value, numberOfUser.value, postCOdeOfUser.value,
        firmOfUser.value, divisionOfUser.value, birthdayOfUser.value);
    if (Array.isArray(contentOfLocalStorage) && localStorage.getItem('users') !== null) {
        contentOfLocalStorage.push(visitor);
        localStorage.setItem('users', JSON.stringify(contentOfLocalStorage));
    } else {
        let emptyArray = [];
        emptyArray.push(visitor);
        localStorage.setItem('users', JSON.stringify(emptyArray));
    }
    let alreadyCreatedContainer = document.getElementById('onlyOne');
    try {
        alreadyCreatedContainer.parentNode.removeChild(alreadyCreatedContainer);
    }catch (e) {
        TypeError
    }
    let pageContent = document.createElement("div");
    pageContent.id = "onlyOne";

    if (pageContent.childElementCount === 0) {
        for (let eachUserFromLC = 0; eachUserFromLC < contentOfLocalStorage.length; eachUserFromLC++) {
            if (contentOfLocalStorage[eachUserFromLC] != null) {
                let writeUserValue = document.createElement("div");
                writeUserValue.innerText = JSON.stringify(contentOfLocalStorage[eachUserFromLC]);
                document.body.appendChild(pageContent);
                let deleteButton = document.createElement("button");
                deleteButton.innerText = "delete";
                deleteButton.id = `${eachUserFromLC}`;
                writeUserValue.appendChild(deleteButton);
                deleteButton.onclick = function (ev) {

                    ev.preventDefault()
                    contentOfLocalStorage[parseInt(deleteButton.id)] = null;
                    this.parentNode.remove();
                    localStorage.setItem('users', JSON.stringify(contentOfLocalStorage))
                }
                let editButton = document.createElement("button");
                editButton.innerText = "edit";
                editButton.id = `0${eachUserFromLC}`;
                editButton.onclick = function (ev){
                    nameOfUser.value = contentOfLocalStorage[eachUserFromLC].name;
                    surnameOfUser.value = contentOfLocalStorage[eachUserFromLC].surname
                    fatherNameOfUser.value = contentOfLocalStorage[eachUserFromLC].fatherName;
                    numberOfUser.value = contentOfLocalStorage[eachUserFromLC].number;
                    postCOdeOfUser.value = contentOfLocalStorage[eachUserFromLC].postCode;
                    firmOfUser.value = contentOfLocalStorage[eachUserFromLC].firm;
                    divisionOfUser.value = contentOfLocalStorage[eachUserFromLC].division;
                    birthdayOfUser.value = contentOfLocalStorage[eachUserFromLC].birthday;
                }
                writeUserValue.appendChild(editButton);
                pageContent.appendChild(writeUserValue);
            }
        }
    }
}