
var Counter = 1

function addTodo() {
    var todos = document.getElementById('todos')
    var inpVal = document.getElementById('todoinput')
    if (todoinput.value.length < 3) {
        alert("Enter correct todo value")
        return
    }

    todos.setAttribute('class', 'todosContainer')

    
    var element = document.createElement('div')
    element.setAttribute('id', Counter)
    element.setAttribute('class', "todo")

    element.innerHTML = `
    <p>${inpVal.value}</p> <button onclick="deleteTodo(${Counter})">Delete</button> <button onclick="updateTodo(${Counter})">Update</button>
   `

    todos.appendChild(element)

    Counter = ++Counter;
}

function deleteTodo(id){
    // console.log("DELETED", id);
    var deletedItem = document.getElementById(id);
    var parentElem = deletedItem.parentNode;
    parentElem.removeChild(deletedItem)
}

function updateTodo(id){
    var inpVal = prompt("ENTER YOUR UPDATED VALUE!")
    if (inpVal.length < 3) {
        alert("Enter correct todo value")
        return
    }
    var todoItem = document.getElementById(id)

    todoItem.innerHTML = `
    <p>${inpVal}</p> <button onclick="deleteTodo(${id})">Delete</button> <button onclick="updateTodo(${id})">Update</button>
   `
}