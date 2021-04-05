import { Todo } from "../../domain/entities/Todos"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class ForTodo {
    todoUID = 0
    todo = ""
    todoIsComplete = false
}

const todoListSessionStorageName = "todoList"
const getjsonString = sessionStorage.getItem(todoListSessionStorageName)
const parsedJsonString = JSON.parse(getjsonString || "[]")

export class TodoRepositoryImpl implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        return parsedJsonString.map((todo: ForTodo) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    createTodo(todo: Todo): Todo[] {
        parsedJsonString.push(todo)
        sessionStorage.setItem(todoListSessionStorageName, JSON.stringify(parsedJsonString))
        return parsedJsonString.map((todo: ForTodo) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    deleteTodo(data: Todo): Todo[] {
        const indextoDelete = parsedJsonString.findIndex((data: Todo) => data.todoUID === data.todoUID)
        parsedJsonString.splice(indextoDelete, 1)
        sessionStorage.setItem(todoListSessionStorageName, JSON.stringify(parsedJsonString))
        return parsedJsonString.map((todo: ForTodo) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    updateTodo(data: Todo): Todo[] {
        const indextoUpdate = parsedJsonString.findIndex((data: Todo) => data.todoUID === data.todoUID)
        parsedJsonString[indextoUpdate].todo = data.todo
        sessionStorage.setItem(todoListSessionStorageName, JSON.stringify(parsedJsonString))
        return parsedJsonString.map((todo: ForTodo) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    completeTodo(data: Todo): Todo[] {
        const indextoUpdateTodoStatus = parsedJsonString.findIndex((data: Todo) => data.todoUID === data.todoUID)
        parsedJsonString[indextoUpdateTodoStatus].todoIsComplete = data.todoIsComplete
        sessionStorage.setItem(todoListSessionStorageName, JSON.stringify(parsedJsonString))
        return parsedJsonString.map((todo: ForTodo) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }
}
