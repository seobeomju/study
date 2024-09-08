const toDoFrom=document.getElementById("todo-form");
const toDoInput=toDoFrom.querySelector("input");
const toDoList=document.getElementById("todo-list");
let toDos=[];
let TODOS_KEY="todos"
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newToDoObj={
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    painToDo(newToDoObj);
    saveToDos();
}
function deleteToDo(event){
    //console.log(event.target.parentElement.innerText);
    const li =event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}
function painToDo(newTodo){
    const li =document.createElement("li");
    li.id =newTodo.id;
    const span=document.createElement("span");
    span.innerText = newTodo.text;
    const button=document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
toDoFrom.addEventListener("submit",handleToDoSubmit)
const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    //parsedToDos.forEach((item)=>console.log("this is the turn of", item));
    toDos=parsedToDos;
    parsedToDos.forEach(painToDo);
}

