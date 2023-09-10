
const todoListElm = document.getElementById("todoList");
const inputTodoElm = document.getElementById("inputTodo");
const addBtn = document.getElementById("add-btn");

const handleDeleteTodo = (deleteId) => {
  const deleteIndex = todoList.findIndex((todo) => todo.id === deleteId);
  todoList.splice(deleteIndex, 1);
  renderTodoList();
  saveLocalStorage();
}

const handleChangeStatus = (id) => {
  const index = todoList.findIndex((todo) => todo.id === id);
  todoList[index].completed = !todoList[index].completed;
  saveLocalStorage();
}

const renderTodoList = () => {
  todoListElm.innerHTML = "";
  todoList.forEach((todo) => {
    const todoElm = document.createElement('div');
    todoElm.classList.add('todo');
  
    const inputElm = document.createElement('input');
    inputElm.setAttribute('type', 'checkbox');
    inputElm.checked = todo.completed;
    inputElm.addEventListener('change', () => handleChangeStatus(todo.id));
  
    const spanElm = document.createElement('span');
    spanElm.textContent = todo.title;
  
    const iconElm = document.createElement('i');
    iconElm.classList.add("bi", "bi-trash3-fill");
    iconElm.addEventListener('click', () => handleDeleteTodo(todo.id));
  
    todoElm.appendChild(inputElm);
    todoElm.appendChild(spanElm);
    todoElm.appendChild(iconElm);
    todoListElm.appendChild(todoElm);
  });
}

const handleAddTodo = () => {
  if (inputTodoElm.value === '') {
    alert('Ban can phai nhap mot viec gi do');
  } else {
    todoList.unshift ({
      id: Math.floor(Math.random() * 10000),
      title: inputTodoElm.value,
      completed: false,
    })
    renderTodoList();
    inputTodoElm.value = "";
    saveLocalStorage();
  }
}

// const saveLocalStorage = () => {
//   localStorage.setItem('todos', JSON.stringify(todoList));
// }

// const getLocalStorage = () => {
//   const todoListLocal = JSON.parse(localStorage.getItem('todos'));
//   if(todoListLocal) {
//     todoList = todoListLocal;
//   }
//   renderTodoList();
// }

addBtn.addEventListener('click', handleAddTodo);

// getLocalStorage();

const getTodoList = () => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1").then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        todoList = data;
        renderTodoList();
    })
}

async function logMovies() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    const movies = await response.json();
    console.log(movies);
}

getTodoList();

const All = document.getElementById("all");
const Completed = document.getElementById("completed");
const Uncompleted = document.getElementById("uncompleted");

const all = () => {
    getTodoList();
}

const completed = () => {
    const completedTodo = getTodoList.forEach(item)
}

All.addEventListener('click',);
Completed.addEventListener('click',);
Uncompleted.addEventListener('click',);