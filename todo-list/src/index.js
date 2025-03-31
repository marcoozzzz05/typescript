"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = [];
let todoCounter = 1;
function addTodo(title) {
    const newTodo = {
        id: todoCounter++,
        title: title,
        completed: false,
    };
    todos.push(newTodo);
}
addTodo("Todo1");
addTodo("Todo2");
console.log(todos);
function assignTodoToUser(todoId, userId) {
    const todo = todos.find(todo => todo.id === todoId);
    if (todo) {
        todo.userId = userId;
        console.log(`Assegnato todo ${todoId} all'utente ${userId}`);
    }
    else {
        console.log(`Todo con id ${todoId} non trovato`);
    }
}
assignTodoToUser(1, 10);
assignTodoToUser(2, 12);
console.log(todos);
function getUserTodos(userId) {
    return todos.filter(todo => todo.userId === userId);
}
console.log(getUserTodos(10));
function error(message) {
    throw new Error(message);
}
//error("Errore")
function parseInput(input) {
    if (typeof input === "string") {
        return input;
    }
    if (typeof input === "number") {
        return input.toString();
    }
    return error("Errore! L'Input deve essere una stringa o un numero");
}
console.log(parseInput("ciao"));
