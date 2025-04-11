import {Todo,User,Project, TodoStatus} from  "./types"
import { User1 } from "./User1";
import { PartialTodo, TodoRecord } from "./types";

const todos: Todo[] = [];
let todoCounter = 1;

function addTodo(title: string, metadata?: string | object): void {
    const newTodo: Todo = {
      id: todoCounter++, 
      title: title,
      completed: false,
      metadata,
      status: TodoStatus.Pending
    };

    todos.push(newTodo);
}
  
addTodo("Todo1");
addTodo("Todo2")  
console.log(todos); 

function assignTodoToUser(todoId: number, userId: number): void {
  const todo = todos.find(todo => todo.id === todoId);
  if (todo) {
    todo.userId = userId;
    console.log(`Assegnato todo ${todoId} all'utente ${userId}`);
  } else {
    console.log(`Todo con id ${todoId} non trovato`);
  }
}

assignTodoToUser(1,10)
assignTodoToUser(2,12);
console.log(todos);

function getUserTodos(userId: number): Todo[] {
  return todos.filter(todo => todo.userId === userId);
}

console.log(getUserTodos(10))

function error(message: string) : never {
  throw new Error(message)
}

//error("Errore")

function parseInput(input: unknown): string {
  if(typeof input === "string") {
    return input
  }
  if(typeof input === "number") {
    return input.toString()
  }
  return error("Errore! L'Input deve essere una stringa o un numero")  
}

console.log(parseInput("ciao"))

function updateTodo(todoId: number, updatedFields: Partial<Todo>): void {
  const todo = todos.find(todo => todo.id === todoId);
  if (todo) {
    Object.assign(todo, updatedFields);
    console.log(`Todo ${todoId} aggiornato:`, todo);
  } else {
    console.log(`Todo con id ${todoId} non trovato`);
  }
}

updateTodo(1, { title: "Todo1 aggiornato", completed: true });
updateTodo(2, { metadata: "Nuovo metadata" });

console.log(todos);

function getTodoSummary(todo: Todo): [string,boolean] {
  return [todo.title,todo.completed]
}

const testTodo: Todo = {
  id: 1,
  title: "boh",
  completed: true,
  status: TodoStatus.Pending
}

console.log(getTodoSummary(testTodo))

function createProject(id: number, name: string, users: User[], todos: Todo[]): Project {
  return {
    id,
    name,
    users,
    todos
  };
}

const todo: Todo = {id: 1, title: "prova-project", completed: false, status: TodoStatus.Pending }
const user: User = {
  id: 1,
  name: "marco",
  email: "marco@gmail.com",
  todos: [todo]
};

const project = createProject(1,"project",[user],[todo])
console.log(project)

function updateTodoStatus(todoId: number, newStatus: TodoStatus): boolean {
  const todo = todos.find(t => t.id === todoId);
  if (!todo) {
    return false; 
  }
  todo.status = newStatus;
  return true; 
}

updateTodoStatus(1,TodoStatus.Completed)

const user1 = new User1(1, "marco", "marco@gmail.it")
const todo1: Todo = {id:1, title:'boh', completed:false, status:TodoStatus.Pending }
const user2 = new User1(2, "ciao", "ciao@gmail.it")
const todo2: Todo = {id:2, title:'boh', completed:false, status:TodoStatus.Pending }

user1.addTodo(todo1);
user2.addTodo(todo2);

function updatePartialTodo(todoId: number, updates: PartialTodo): boolean {
  const todo = todos.find(t => t.id === todoId);
  if (!todo) return false;

  Object.assign(todo, updates); 
  return true;
}

updatePartialTodo(1,{title:"boh", completed: true})

function convertArrayToRecord(todos: Todo[]): TodoRecord {
  return todos.reduce((record: TodoRecord, todo) => {
    record[todo.id] = todo;
    return record;
  }, {});
}
