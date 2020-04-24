// / -1- Створити карту користувача(User Card):
// Створити функцію «userCard» яка приймає число(будь-яке число) і повертає об’єкт з методами:

// Об’єкт має містити такі властивості:
// • balance(по замовчуванням 100)
// • transactionLimit(по замовчуванням 100. Це ліміт коштів які ви можете взяти з карти)
// • historyLogs(масив об’єктів який містить інформацію про операції та трансакції данної карти)
// • key(число в діапазоні[1; 3]залежить від числа яке ви передали в userCard функції.Кожна карта повинна мати унікальний key)

// User Card методи:
// - getCardOptions.Дана функція повертає об’єкт котрий містить інформацію про карту!
//   - putCredits.Ця функція отримує певну кількість грошей і заповнює баланс карти!
//     - takeCredits.Ця функція отримує певну кількість грошей і віднімає ці кошти з баланса карти(протилежний за дією від метода putCredits)
// Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів перевищують кількість коштів, які ви бажаєте
// взяти.Якщо ні, то слід записати відповідне повідомлення у консолі
//   - setTransactionLimit.Ця функція приймає як аргумент число і встановлює його як ліміт транзакцій на картці
//     - transferCredits.Ця функція отримує два аргументи - кількість кредитів, які потрібно передати, та карту одержувача
// Кошти, які ви хочете передати, повинні обкладатися податками 0, 5 %.Не забудьте перед перерахуванням перевірити
// залишок балансу та ліміт транзакцій відправника кредитів(card3).
// Ви повинні відслідковувати тільки Put credits / Take credits / Transaction limit change операції і зберігайте history
// log.History log(Дивитись зображення 1) інформація має зберігатись в об’єктах з такими властивостями:
// • operationType(стрічка яка описує здійснену операцію)
// • credits(кількість коштів)
// • operationTime(формат: "27/07/2018, 03:24:53".Час коли була здійснена операція)

function userCard(key) {
    let time = new Date;
    let balance = 100;
    let transactionLimit = 500;
    let historyLogs = [];
    if (key > 0 && key < 4) {
        function putCredits(money) {
            balance += money;
            historyLogs.push({
                operationType: "Received credits",
                credits: balance,
                operationTime: time.toDateString() + ' ' + time.toTimeString()
            })
        }

        function takeCredits(money) {
            if (balance > money && transactionLimit > money) {
                balance -= money;
                historyLogs.push({
                    operationType: "Withdrawal of credits",
                    credits: balance,
                    operationTime: time.toDateString() + ' ' + time.toTimeString()
                })
            } else {
                console.error('Insufficient credits')
            }
        }

        function setTransactionLimit(money) {
            transactionLimit = money;
            historyLogs.push({
                operationType: `Transaction limit change and now is equal to ${transactionLimit}`,
                credits: balance,
                operationTime: time.toDateString() + ' ' + time.toTimeString()
            })
        }

        function transferCredits(money, userCard) {
            if (balance > money && transactionLimit > 0) {
                balance -= money * 1.005;
                userCard.balance += money;
                transactionLimit -= money;
            }
        }

        function getCardOptions() {
            console.log(historyLogs);
        }

        return {balance, transactionLimit, putCredits, takeCredits, setTransactionLimit, transferCredits, getCardOptions, }
    }
}

let card1 = userCard(1);
card1.putCredits(1000);
card1.putCredits(1000);
card1.takeCredits(200);
card1.setTransactionLimit(200);
card1.getCardOptions(1)

let card2 = userCard(2);
card2.putCredits(100);
card2.takeCredits(50);
card2.setTransactionLimit(1000);
card2.getCardOptions(2)

let card3 = userCard(3);
card3.putCredits(20000);
card3.takeCredits(400);
card3.setTransactionLimit(10000);
card3.takeCredits(8400);

card3.getCardOptions(3)

// -2 - Створити класс`UserAccount`(для цього завдання можна використати ES6 класс або звичайну функцію):
// Класс має містити:
// Властивості акаунту користувача:
// - name(передати в конструкторі);
// - cards(Масив карток користувача.Масив не має бути довшим ніж 3);
// Методи акаунту користувача:
// - addCard. Створює нову карту(використовуйте ‘userCard’ функцію) та додайте її до cards;
// - getCardByKey.Приймає число в діапазоні { 1; 3 } і повертає об’єкт карти;

function UserAccount(name) {
    this.name = name;
    let cards = [];
    function addCard(key) {
        if (key > 0 && key < 4) {
            return cards.push(userCard(key));
        }
    }
    function getCardByKey(key) {
        if (key > 0 && key < 4) {
            return console.log(cards[key]);
        }
    }
    return {addCard, getCardByKey, name};
}

const bob = new UserAccount('Bob');
bob.addCard(1);
bob.addCard(2);
bob.addCard(3);
bob.getCardByKey(2);

