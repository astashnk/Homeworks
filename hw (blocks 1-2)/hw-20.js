// task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// task 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.pop());

// task 3
const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
numbers.splice(0, 5);
console.log(numbers);

// task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.splice(2, 2, 'Borya');
students.splice(0, 1, 'Andrey');
console.log(students);

// task 5
const cats = ["Gachito", "Tom", "Batman"];
console.log(cats);
for (i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

// task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log(allNumbers.indexOf(8));

// task 7
const binary = [0, 0, 0, 0];
console.log(binary.join("1"));

// advanced 1
function checkPalindrome(word) {    
    let l = word.length;
    for (let i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (checkPalindrome("level")) {
    document.write("The word is a palindrome");
} else {
    document.write("The word is NOT a palindrome");
}

// advanced 2
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

let sum = 0;
let count = 0;
function averageMatrix(array) {
    for (let i of array) {
        for (let j of i) {
            sum += j;
            count++;
        }
    }
    return sum / count;
}
console.log(averageMatrix(matrix));

// advanced 3
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
let negArr = [];
let posArr = [];

for (let val of mixedNumbers) {
    if (val < 0) negArr.push(val);
    else posArr.push(val);
}

console.log(negArr);
console.log(posArr);

// advanced 4
const randArr = [];
const cubeArr = [];
let x = 0;
for (let i = 1; i < 6; i++){
    randArr.push(Math.floor(Math.random() * 100))
}
for (let i = 0; i < randArr.length; i++){
    cubeArr.push(randArr[i]**3)
}
console.log(randArr);
console.log(cubeArr);
