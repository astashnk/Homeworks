export { createFrame, printTodos };

//создаем функцию для генерации шапки
function createFrame(){
    //находим div с  id root
    const iRoot = document.getElementById("root");

    //создаем контейнер для всего todo-list
    const mainDiv = document.createElement("div");
    mainDiv.classList.add ("todo-container");
    iRoot.append(mainDiv);

    //создаем div для шапки todo-list
    const headerDiv = document.createElement("div");
    headerDiv.classList.add ("todo-header");
    mainDiv.append(headerDiv);

    //собственно, кнопочки и инпуты в шапке
    const buttonDel = document.createElement("button");
    buttonDel.innerText = "Delete all";
    buttonDel.classList.add("header__button-del");
    headerDiv.append(buttonDel);

    const headerInput = document.createElement("input");
    headerInput.classList.add("header__input");
    headerInput.setAttribute ("placeholder", "Enter text");
    headerDiv.append(headerInput);

    const buttonAdd = document.createElement("button");
    buttonAdd.innerText = "Add";
    buttonAdd.classList.add("header__button-add");
    headerDiv.append(buttonAdd);

    // div для всех тудушек
    const allTodos = document.createElement("div");
    allTodos.classList.add ("todo-tasks");
    mainDiv.append(allTodos);
}

//создаем функцию для генерации задачи
function printTodos(obj){
    //находим див для тудушек
    const todos = document.getElementsByClassName("todo-tasks");

    //создаем div для блока todo-list
    const blockDiv = document.createElement ("div");
    blockDiv.classList.add ("todo-task");
    todos[0].append(blockDiv);

    //уникальный айди для каждой задачи, генерируется сам
    blockDiv.setAttribute("id", `${obj.id}`);

    //кнопки и поле с текстом в блоке
    const buttonCheck = document.createElement("button");
    buttonCheck.innerText = "✓";
    buttonCheck.classList.add("block__button-check");
    buttonCheck.setAttribute("data-action", "done")
    blockDiv.append(buttonCheck);

    if (obj.completed == true) {
        blockDiv.classList.add("task-done");
    }

    const todoText = document.createElement("div");
    todoText.classList.add("block__text");
    todoText.innerText = `${obj.title}`;
    blockDiv.append(todoText);

    const blockDel = document.createElement("button");
    blockDel.innerText = "✖";
    blockDel.classList.add("block__button-del");
    blockDel.setAttribute("data-action", "delete");
    blockDiv.append(blockDel);

    //генерируем дату и форматируем ее
    let objectDate = new Date();
    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    let year = objectDate.getFullYear();
    let dateForBlock = day + "/" + (month+1) + "/" + year;

    //поле с датой в блоке
    const todoDate = document.createElement("div");
    todoDate.classList.add("block__date");
    todoDate.innerText = dateForBlock;
    blockDiv.append(todoDate);
}
