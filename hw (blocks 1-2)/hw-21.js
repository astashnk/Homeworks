// task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(element => console.log(element));
fibonacci.forEach(function(element){console.log(element)});

// task 2
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

const members2 = users.map(function (item, index) {
    return `member ${index + 1}: ${item}`;
});
console.log(members2);

const members1 = users.map((item, index) => `member ${index + 1}: ${item}`);
console.log(members1);

// task 3
const numberss = [7, -4, 32, -90, 54, 32, -21];

const positiveNum2 = numberss.filter((item) => item > 0);
console.log(positiveNum2);

const positiveNum1 = numberss.filter(function (item) {
    return item >= 0;});
console.log(positiveNum1);

// task 4
const fibonaccii = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

const sum1 = fibonaccii.reduce(function (item, index) {
    return item + index;
});
console.log(sum1);

const sum2 = fibonaccii.reduce((item, index) => item + index);
console.log(sum2);

// task 5
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

const num2 = numbers.find(function(element){
    return element % 2 == 0
});
console.log(num2);

const num1 = numbers.find((element) => element % 2 == 0);
console.log(num1);

// advanced 1
function Student(salary, rate, name, getCredit) {
    this.salary = salary;
    this.rate = rate;
    this.name = name;
    this.getCredit = function() {
        if (this.rate == 'A') {
            return this.salary * 12;
        } else if (this.rate == "B") {
            return this.salary * 9;
        } else if (this.rate == "C") {
            return this.salary * 6;
        } else if (this.rate == "D") {
            return "Не можем дать кредит";
        }
    }
}
let student = new Student(1000, "A", "Jack");
let student1 = new Student(800, "B", "Ann");
let student2 = new Student(600, "C", "Liam");
let student3 = new Student(400, "D", "Gel");
let student4 = new Student(200, "C", "Many");
const students = [student, student1, student2, student3, student4];
console.log(students)

    let sumCredit = students.reduce((sum, elem) => {
        if (typeof(elem.getCredit()) == "number"){
            return sum + elem.getCredit();
        } else {
            return sum
        }
    }, 0);

// advanced 2
let str = "This website is for losers LOL!";
const vowels = ["e", "E", "i", "I", "a", "A", "o", "O", "u", "U"];
const removeVowels = (str) => {
    return str.split("").filter(remove => !vowels.includes(remove)).join("");
}
console.log(removeVowels(str));

// advanced 3
const letters = str => str.toUpperCase().split('').map(
    (item, index) => item = item + item.toLowerCase().repeat(index)
).join("-");
console.log(letters("JavaScript"));

// advanced 4
const isIsogram = str => {
    const checkIsogr = str.toLowerCase();
    for (let j = 0; j < checkIsogr.length; ++j){
        for (let k = j + 1; k < checkIsogr.length; ++k){
            if (checkIsogr[j] === checkIsogr[k]){
                return false;
            }
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));


