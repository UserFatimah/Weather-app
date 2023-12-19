'use strict';


const todoList = [{
    name: 'wash dishes',
    dueDate: '2023-01-12'
}, {
    name: 'make dinner',
    dueDate: '2023-01-12'
}]
    ;
renderTodoList()

function renderTodoList() {
            let todoListHTML = '';
        for (let i = 0; i < todoList.length; i++) {
            const todoObject = todoList[i];
            const name = todoObject.name;
            const dueDate = todoObject.dueDate;
            // console.log (todo);
            const html = `
                <div>${name} </div>
                <div>${dueDate}</div>
                <button class="delete-todo-button" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
                ">delete</button>
            `;
            // console.log(html);

            todoListHTML += html;
        }
        console.log(todoListHTML);

        document.querySelector('.js-todo-list').innerHTML = todoListHTML; 
}




function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;


   todoList.push({
    name: name,
    dueDate: dueDate
   });

   
   console.log(todoList);
   inputElement.value = '';
   renderTodoList();

}










