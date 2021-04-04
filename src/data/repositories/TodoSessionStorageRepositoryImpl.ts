import { Todo } from "../../domain/entities/Todos"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class TodoDTO {
    todoUID = 0
    todo = ""
    todoIsComplete = false
}

const todoListSessionStorageName = "todoList"
const getjsonString = sessionStorage.getItem(todoListSessionStorageName)
const parsedJsonString = JSON.parse(getjsonString || "[]")

export class TodoSessionStorageRepositoryImpl implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        return parsedJsonString.map((todo: TodoDTO) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    createTodo(todo: Todo): Todo[] {
        parsedJsonString.push(todo)
        sessionStorage.setItem(todoListSessionStorageName, JSON.stringify(parsedJsonString))
        return parsedJsonString.map((todo: TodoDTO) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    deleteTodo(data: Todo): Todo[] {
        const parseIntData = parseInt(data.todoUID.toString())
        const indextoDelete = parsedJsonString.findIndex((data: Todo) => data.todoUID === parseIntData)
        parsedJsonString.splice(indextoDelete)
        sessionStorage.setItem(todoListSessionStorageName, JSON.stringify(parsedJsonString))
        return parsedJsonString.map((todo: TodoDTO) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    updateTodo(data: Todo): Todo[] {
        const parseIntData = parseInt(data.todoUID.toString())
        const indextoUpdate = parsedJsonString.findIndex((data: Todo) => data.todoUID === parseIntData)
        parsedJsonString[indextoUpdate].todo = data.todo
        sessionStorage.setItem(todoListSessionStorageName, JSON.stringify(parsedJsonString))
        return parsedJsonString.map((todo: TodoDTO) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    completeTodo(data: Todo): Todo[] {
        const parseIntData = parseInt(data.todoUID.toString())
        const indextoUpdateTodoStatus = parsedJsonString.findIndex((data: Todo) => data.todoUID === parseIntData)
        parsedJsonString[indextoUpdateTodoStatus].todoIsComplete = data.todoIsComplete
        sessionStorage.setItem(todoListSessionStorageName, JSON.stringify(parsedJsonString))
        return parsedJsonString.map((todo: TodoDTO) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }
}
