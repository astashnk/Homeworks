// task 1
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);

// task 2
let minute = 60;
let hour = 60;
let day = 24;
let year = 365;
let myAgeInSeconds = 17 * minute * hour * day * year;
console.log(myAgeInSeconds);

// task 3
let count = 42;
let userName = "42";
    // variant 1
console.log("" + count);
console.log(String(count));
    // variant 2
console.log(+userName);
console.log(Number(userName));

// task 4
let a = 1;
let b = 2;
let c = "белых медведей";
console.log(" " + a + b + " " + c);

// task 5
let d = "доступ";
let e = "морпех";
let f = "наледь";
let g = "попрек";
let h = "рубило";
let lengthWords = d.length + e.length + f.length + g.length + h.length;
console.log(lengthWords);

// task 6
let number1 = 1;
let string1 = "to";
let boolean1 = true;
console.log("Variable:" + " " + number1 + " " + "have type:" + " " + typeof(number1));
console.log("Variable:" + " " + string1 + " " + "have type:" + " " + typeof(string1));
console.log("Variable:" + " " + boolean1 + " " + "have type:" + " " + typeof(boolean1));

// task 7
console.log(prompt("What is your name?"));
console.log(prompt("How old are you?"));

// task 1 (advanced)
let i = 4;
let j = 3;
i = i + j;
j = i - j;
i = i - j;
console.log(i);
console.log(j);
