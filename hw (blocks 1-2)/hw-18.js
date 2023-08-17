// task 1
function getSum(j){
    let sum = 0
    for(let i = 0; i <= j; i++){
        sum += i
    }
    return sum
}
console.log(getSum(100));

// task 2
function calcOverprice (years, percent) {
    let price = +prompt ("Сколько денег вам нужно?")
    let rest = 1;
    let sum = 0;
    for (let i = 1; i < years; i++){
        sum += rest;
        rest *= percent;
    }
    let overprice = price*sum - price;
    return `Переплата по кредиту составит ${overprice.toFixed(2)} рублей`
}
console.log(calcOverprice(5, 0.17))

// task 3
function trimString(string, from, to) {
    return string.slice(from, to);
}
console.log(trimString("JavaScript Basic Course", 4, 10));

// task 4
function getSumNumbers(numeral){
    let number = String(numeral);
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum += +number[i]
    }
    return sum;
}
console.log(getSumNumbers(346825));

// task 5
function getSum(fromNum, toNum) {
    let sum = 0;
    for (let i = fromNum; i <= toNum; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(-10, 4));

// task 6
function foo() {
    return "foo"
}
function boo() {
    return "boo"
}
function fooboo (bull){
    if (bull === true) {
        return foo()
    } else {
        return boo()
    }
}
console.log (fooboo(true))

// task 1 advanced
function drawTriangle(sideA, sideB, sideC){
    if (sideA + sideB > sideC && 
    sideA + sideC > sideB && 
    sideB + sideC > sideA){
        return true
    } else {
        return false
    }
}
console.log(drawTriangle(3,4,5));

// task 2 advanced
function breakChocolate(n, m) {
    if (n == 0 || m == 0) {
        return 0
    } else {
        return (n - 1) + (m - 1)
    }
}
console.log(breakChocolate(5, 9))

// task 3 advanced
-
