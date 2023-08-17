// task 1
let obj1 = {
    petType: "Cat",
    petVoice: "Meow"
}
delete obj1.petType
delete obj1.petVoice

// task 2
let obj2 = {
    petType: "Cat",
    petVoice: "Meow"
}
console.log("petType" in obj2)

// task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student) {
    console.log(key)
    console.log(student[key])
}

// task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].blue)

// task 5
let salaries = {
    andrey1: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199
}
let average = (salaries.andrey1 + salaries.sveta + salaries.anton + salaries.andrey2 + salaries.alexandra) / 5
console.log(average)

// task 6
let user = {};
let userLogin = prompt("Your login");
let userPassword = prompt("Your password");

user.logIn = userLogin;
user.password = userPassword;

let enteringLogin = prompt("Your login one more time, please");
let enteringPassword = prompt("Enter your password");

if (enteringLogin == user.logIn && enteringPassword == user.password){
    console.log("Welcome here! We are so happy to see you. Thanks for registering!")
} else {
    console.log("Something went wrong. Try again:(")}

// task 1 advanced
let score = "9:3";
let a = score[0];
let b = score[2];
if (a == 0) {
    a = "ноль";
} else if (a == 1) {
    a = "один";
} else if (a == 2) {
    a = "два";
} else if (a == 3) {
    a = "три";
} else if (a == 4) {
    a = "четыре";
} else if (a == 5) {
    a = "пять";
} else if (a == 6) {
    a = "шесть";
} else if (a == 7) {
    a = "семь";
} else if (a == 8) {
    a = "восемь";
} else if (a == 9) {
    a = "девять";
}
if (b == 0) {
    b = "ноль";
}else if (b == 1) {
    b = "один";
} else if (b == 2) {
    b = "два";
} else if (b == 3) {
    b = "три";
} else if (b == 4) {
    b = "четыре";
} else if (b == 5) {
    b = "пять";
} else if (b == 6) {
    b = "шесть";
} else if (b == 7) {
    b = "семь";
} else if (b == 8) {
    b = "восемь";
} else if (b == 9) {
    b = "девять";
}
let result = a + ":" + b;
console.log("Счет данного матча составляет " + result)

// task 2 advanced
let student1 = {
    name: 'Polina',
    age: 27,
}
let student2 = {
    name: 'Polina',
    age: 27,
}
console.log(JSON.stringify(student1) === JSON.stringify(student2))