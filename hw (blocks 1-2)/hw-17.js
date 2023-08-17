// task 1
let a = "true";
let b = false;
let c = 17;
let d = undefined;
let e = null;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

// task 2
let height = 15;
let width = 20;
console.log(Math.max(height,width));

// task 3
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i)}}

// task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = ((key && documents && pen) && (apple || orange));
console.log(shouldGoToWork);

// task 5
let i = prompt("Введите число");
if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizBuz");
    } else if (i % 5 == 0) {
    console.log("Fiz");
    } else if (i % 3 == 0) {
    console.log("Buz");}

// task 6
let yourAge = prompt("Укажите свой возраст!");
if (yourAge >= 18) {
    console.log("Выпей пивка");
    } else if (yourAge < 18) {
    console.log("Пей колу");
    } else if (yourAge = 16 || 17 || 18) {
    console.log("Можешь выкурить сигаретку, только маме не говори");}

// task 7
let side = prompt("В какую сторону света вы хотите отправиться?");
switch (side) {
    case "юг":
        alert("на юг пойдешь счастье найдешь");
        break;
    case "север":
        alert("на север пойдешь много денег найдешь");
        break;
    case "запад":
        alert("на запад пойдешь верного друга найдешь");
        break;
    case "восток":
        alert("на восток пойдешь разработчиком станешь");
        break;}

// task 1(advanced)
let name = "пОлИнА нАбЕрЕжНаЯ";
let fixedName = name[0].toUpperCase() + name.toLowerCase().slice(1, 7) + name[7].toUpperCase() + name.toLowerCase().slice(8);
alert("Привет,  "+fixedName);

// task 2(advanced)
let i = "";
for (j = 0; j < 6; j++) {
        i = i + "#";
    console.log(i);}

