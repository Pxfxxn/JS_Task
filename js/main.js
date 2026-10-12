const formAddTask = document.getElementById("id_task") //Форма новых задач
const inputTask = document.getElementById("name") //Пользователь входит задачу
const container = document.querySelector(".tasks")
let task = [] //массив задач

formAddTask.addEventListener('submit', function (Event) {
    Event.preventDefault() //Отменяет событие по умолчанию
    console.log(Event)
    let nameTask = inputTask.value //Название задачи
    let newTask = document.createElement("div") //Для задач div
    newTask.innerHTML = `<span>${nameTask}</span>` //
    newTask.classList.add('task')
    container.append(newTask)
    task.push(nameTask)
})

//Фунционал перевести все нижные регистр 

const btnloCase = document.getElementById("loCase")
btnloCase.addEventListener('click', function () {
    let newTasks = [...task] //Создаю новый массив
    for (let i = 0; i < newTasks.length; i++) { //перебираем все элементы массив 
        newTasks[i] = newTasks[i].toLowerCase() //переводим каждую задачу в нижниый регистр
    }

    container.innerHTML = ""; //Очищение задач

    for (let i in newTasks) { //создаем нвый запись
        let newTask = document.createElement("div") //Для задач div
        newTask.innerHTML = `<span>${newTasks[i]}</span>` //
        newTask.classList.add('task')
        container.append(newTask)
    }
})