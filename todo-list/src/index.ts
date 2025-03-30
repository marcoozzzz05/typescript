import {Todo} from  "./types"

const todos: Todo[] = [];

function addTodo(title: string): void {
    const newTodo: Todo = {
      id: Date.now(), 
      title: title,
      completed: false,
    };

    todos.push(newTodo);
}
  
addTodo("Titolo");  
console.log(todos); 