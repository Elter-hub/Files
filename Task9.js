// Зробити свій розпоряжок дня.
//     Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
//     Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
//     Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
//     Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
////     Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте
// - Поїхали до дому - Повчились - Лягли спати.
//
//     Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції
//     доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.
console.log("24 hours")
let time = 24;

function wakeUp(amIStillAlive, cb) {
    setTimeout(() => {
        if (amIStillAlive) {
            console.log("One more successfully survived day in quarantine");
            time -= 10;
            cb(null, time)
        } else {
            console.log("Homework doesn't matter to you anymore");
            time = undefined;
            cb("wakeUp is always true")
        }
    }, 2000)
}
let money = 300;
function goToStore(needSomething, cb){
    setTimeout(() => {
        if (money > 200){
            console.log("Buy some bread, cookies and cigarettes");
            money -= 120;
            time -= 0.5;
            cb(null, time)
        }else {
            console.log("Buy at least cigarettes, you will find food in refrigerator");
            time -= 0.5;
            money -= 50;
            cb(null, time);
        }
    },2000)
}
function eat(hungry, cb) {
    setTimeout(() => {
        if (hungry){
            console.log("Heat something from fridge or make eggs");
            time -= 1;
            cb(null, time);
        }else {
            console.log("Make a coffee and eat few cookies")
            time -= 0.5;
            cb(null, time);
        }
    },2000)
}

function playDota2(addicted, cb){
    setTimeout(() => {
        if (addicted){
            console.log("Omg you're 25years old child");
            time -= 2;
            cb(null, time);
        }else {
            console.log("What are you going to do all day?")
            time -= 0.5;
            cb(null, time);
        }
    }, 2000)
}
function learn(shouldI, cb){
    setTimeout(() => {
        if (shouldI){
            console.log("Hmmm you are going to do smth useful");
            time -= 2;
            cb(null, time);
        }else {
            console.log("Go for a walk programing isn't for you")
            time -= 2;
            cb(null, time)
        }
    }, 2000)
}
function watchVideos(youtube, cb){
    setTimeout(() => {
        if (youtube){
            console.log("Watch something useful");
            time -= 1;
            cb(null, time);
        }else  {
            console.log("Watch at least smth related to programing");
            time -= 1;
            cb(null, time);
        }
    }, 1000)
}
function takeNap(tired, cb) {
    setTimeout(() => {
        if (tired){
            console.log("You deserved some rest");
            time -= 1;
            cb(null, time)
        }else {
            console.log("Waste your time!")
            time -= 1;
            cb(null, time)
        }
    }, 1000)
}
function oktenWebLecture (weekDay, cb){
    setTimeout(() => {
        if (weekDay){
            console.log("Quickly make tea and try to really listen what they teach you")
            time -= 2;
            cb(null, time);
        }else {
            console.log("do whatever you want!")
            time -= 2;
            cb(null, time);
        }
    }, 1000)
}
function goToSleep(sleepy, cb){
    setTimeout(() => {
        if (sleepy){
            console.log("Sleep like a log");
            time -= 2;
            cb (null, time);
        }else {
            time -=2;
            cb (null, time);
        }
    }, 2000)
}



wakeUp(true, (error, time) => {
    if (error) {
        console.log(error);
    }else {
        console.log(time);
        goToStore(true, (error, time) => {
            if (error){
                console.log(error);
            }else {
                console.log(time);
                eat(false, (error, time) => {
                    if (error){
                        console.log(error);
                    }else {
                        console.log(time);
                        playDota2(true, (error, time) => {
                            if (error){
                                console.log(error)
                            }else {
                                console.log(time);
                                learn(false, (error, time) => {
                                    if (error){
                                        console.log(error);
                                    }else {
                                        console.log(time);
                                        learn(true, (error, time) => {
                                            if (error) {
                                                console.log(error);
                                            }else {
                                                console.log(time);
                                                takeNap(true, (error, time) => {
                                                    if (error) {
                                                        console.log(error);
                                                    }else {
                                                        console.log(time);
                                                        watchVideos(true,(error, time) => {
                                                            if (error) {
                                                                console.log(error);
                                                            } else {
                                                                console.log(time);
                                                                eat(true, (error, time) =>{
                                                                    if (error){
                                                                        console.log(error);
                                                                    }else {
                                                                        console.log(time);
                                                                        oktenWebLecture(true, (error, time) => {
                                                                            console.log(time);
                                                                            goToSleep(true, (error, time) => {
                                                                                console.log(time)
                                                                            })
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })

                                                    }
                                                })

                                            }
                                        })
                                    }

                                })
                            }

                        })
                    }
                })
            }
        })
    }
})
