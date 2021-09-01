var toggle = document.querySelector('.todo-toggle');
var container = document.querySelector('.container');
var darkSwitch = document.querySelector('.darkicon');
var lightSwitch = document.querySelector('.lighticon');
var dark = document.querySelector('.dark');
var light = document.querySelector('.light');
var todoTask = document.querySelector('.todo-input');
var todoTaskList = document.querySelector('.todo-task-list');
var addBtn = document.querySelector('.add-btn');
var taskAdded = document.querySelector('#todo-add');
var todoTaskList = document.querySelector('.todo-task-list');
var borderBot = document.querySelector('.border-bot');
var crossBtn = document.getElementsByClassName('.cross');

var darkTheme = true;


toggle.addEventListener('click', function(){
    if(darkTheme === true){
        dark.style.display = 'none';
        light.style.display = 'initial';
        darkSwitch.style.display = 'none';
        lightSwitch.style.display = 'initial';
        container.style.backgroundColor = 'hsl(236, 33%, 92%)';
        todoTask.style.backgroundColor = 'hsl(0, 0%, 98%)';
        todoTask.style.color = 'hsl(235, 21%, 11%)';
        todoTaskList.style.backgroundColor = 'hsl(0, 0%, 98%)';
        todoTaskList.style.color = 'hsl(235, 21%, 11%)';
        borderBottom = '1.2px solid hsl(235, 19%, 35%)';
        darkTheme = false;
    } else {
        dark.style.display = 'initial';
        light.style.display = 'none';
        darkSwitch.style.display = 'initial';
        lightSwitch.style.display = 'none';
        container.style.backgroundColor = 'hsl(235, 21%, 11%)';
        todoTask.style.backgroundColor = 'hsl(235, 24%, 19%)';
        todoTask.style.color = 'hsl(234, 39%, 85%)';
        todoTaskList.style.backgroundColor = 'hsl(235, 24%, 19%)';
        todoTaskList.style.color = 'hsl(234, 39%, 85%)';
        borderBottom = '0.5px solid hsl(234, 11%, 52%)';
        darkTheme = true;
    }
})
    

function taskAddHandler(){
    var taskAddedInput = taskAdded.value;

    var template = `<div class="todo-task-item border-bot">
                        <div id="todo-add" class="todo-task">${taskAddedInput}</div>
                        <div class="select-circle"></div>
                        <button class="cross"><i class="ri-close-fill"></i></button>
                    </div>`;
    
    todoTaskList.innerHTML += template;
}
addBtn.addEventListener('click', taskAddHandler);

