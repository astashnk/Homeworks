import { createFrame, printTodos } from "./functions.js";

//создаем контейнер для todo
createFrame();

//блокируем инпут, оставшийся от туду листа
const input = document.getElementsByClassName("header__input")[0];
input.disabled = true;

//находим кнопку add и вешаем на нее отработчик событий
const add = document.getElementsByClassName("header__button-add")[0];

//api, подключаем и генерируем задачи при нажатии на кнопку
add.addEventListener("click", async function(){
    let arr = await getTodos();
    for (let i = 0; i < arr.length; i++){
        printTodos(arr[i])
    }
})

async function getTodos(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let arr = await response.json();
    return arr
}

//можно понажимать на кнопки, оставшиеся от туду листа
//находим кнопку delete all и вешаем на нее отработчик событий 
const del = document.getElementsByClassName("header__button-del")[0];
del.addEventListener("click", function () {
    const deleteAll = document.querySelectorAll('.todo-task');
    for (let i = 0; i < deleteAll.length; i++) {
        deleteAll[i].remove();
    }
})

//удаление одной задачи
const removeTask = document.getElementsByClassName("todo-tasks")[0];
removeTask.addEventListener("click", function(event){
    if (event.target.dataset.action === "delete"){
        const taskToRemove = event.target.closest(".todo-task");
        taskToRemove.remove();
    }
})

//выполненные задачи
const checkTask = document.getElementsByClassName("todo-tasks")[0];
checkTask.addEventListener("click", function(event){
    if (event.target.dataset.action === "done"){
        const taskToCheck = event.target.closest(".todo-task");
        taskToCheck.classList.toggle("task-done");
    }
})
