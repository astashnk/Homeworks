import { createFrame, createTask } from "./functions.js";

//создаем массив для хранения данных
let todoList = [];

//создаем контейнер для todo
createFrame();

localStorageToArray();

if(todoList.length !== 0) {
    for (let i = 0; i < todoList.length; i++){
        createTask(todoList[i])
    }
}

//находим кнопку add и вешаем на нее отработчик событий
const add = document.getElementsByClassName("header__button-add")[0];
const input = document.getElementsByClassName("header__input")[0];
add.addEventListener("click", function(event){
    event.preventDefault();

    //генерируем дату и форматируем ее
    let objectDate = new Date();
    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    let year = objectDate.getFullYear();
    let dateForBlock = day + "/" + (month+1) + "/" + year;
    
    //данные, которые закидываются в массив
    let newTask = {
        id: Date.now(),
        date: dateForBlock,
        text: input.value,
        isChecked: false,
    }

    //заливаем задачу в массив, массив в local storage
    todoList.push(newTask);
    addToLocalStorage(todoList);

    //генерируем задачу с данными из объекта
    createTask(newTask);

    //очистка поля ввода
    input.value = "";
})

//находим кнопку delete all и вешаем на нее отработчик событий 
const del = document.getElementsByClassName("header__button-del")[0];
del.addEventListener("click", function () {
    const deleteAll = document.querySelectorAll('.todo-task');
    for (let i = 0; i < deleteAll.length; i++) {
        deleteAll[i].remove();
    }

    //очистка поля ввода, массива и local storage
    input.value = "";
    todoList = [];
    addToLocalStorage(todoList)
})

//удаление одной задачи
const removeTask = document.getElementsByClassName("todo-tasks")[0];
removeTask.addEventListener("click", function(event){
    if (event.target.dataset.action === "delete"){
        const taskToRemove = event.target.closest(".todo-task");
        taskToRemove.remove();
        const idRemoved = taskToRemove.getAttribute("id");
        todoList.forEach (function(element, index) {
            if(element.id == idRemoved){
                todoList.splice(index, 1)
                addToLocalStorage(todoList)
            }
    })
}})

//выполненные задачи
const checkTask = document.getElementsByClassName("todo-tasks")[0];
checkTask.addEventListener("click", function(event){
    if (event.target.dataset.action === "done"){
        const taskToCheck = event.target.closest(".todo-task");
        taskToCheck.classList.toggle("task-done");
        const idChecked = taskToCheck.getAttribute("id");
        todoList.forEach(element => {
            if(element.id == idChecked) {
                if(element.isChecked == false){
                    element.isChecked = true;
                } else {
                    element.isChecked = false;
                }
            }
        })
        addToLocalStorage(todoList)
    }
})

//функция, которая превращает строку local storage в массив
function localStorageToArray(){
    if (localStorage.getItem("todos") !== null){
        todoList = JSON.parse(localStorage.getItem("todos"))
    }
}

//функция, которая записывает задачи в local storage
function addToLocalStorage(array){
    localStorage.setItem("todos", JSON.stringify(array))
}