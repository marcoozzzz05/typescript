"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = [];
function addTodo(title) {
    const newTodo = {
        id: Date.now(),
        title: title,
        completed: false,
    };
    todos.push(newTodo);
}
addTodo("Comprare il latte");
addTodo("Andare in palestra");
console.log(todos);
