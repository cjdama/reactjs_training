import { Todo } from "../../domain/entities/Todos"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class ForTodo {
    todoUID = 0
    todo = ""
    todoIsComplete = false
}

export const jsontodoList = [{ todoUID: 0, todo: "", todoIsComplete: false }]

export class TodoRepositoryImpl implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        jsontodoList.splice(0)
        const jsonString = JSON.stringify(jsontodoList)
        const res = JSON.parse(jsonString)
        return res.map((todo: ForTodo) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    createTodo(todo: Todo): Todo[] {
        jsontodoList.push(todo)
        const jsonString = JSON.stringify(jsontodoList)
        const parsedJsonString = JSON.parse(jsonString)
        return parsedJsonString.map((todo: ForTodo) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    deleteTodo(data: Todo): Todo[] {
        const indextoDelete = jsontodoList.findIndex((todoUIDData) => todoUIDData.todoUID === data.todoUID)
        jsontodoList.splice(indextoDelete)
        return jsontodoList.map((todo: ForTodo) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    updateTodo(data: Todo): Todo[] {
        const indextoUpdate = jsontodoList.findIndex((todoUIDData) => todoUIDData.todoUID === data.todoUID)
        jsontodoList[indextoUpdate].todo = data.todo
        return jsontodoList.map((todo: ForTodo) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }

    completeTodo(data: Todo): Todo[] {
        const indextoUpdate = jsontodoList.findIndex((todoUIDData) => todoUIDData.todoUID === data.todoUID)
        jsontodoList[indextoUpdate].todoIsComplete = data.todoIsComplete
        return jsontodoList.map((todo: ForTodo) => new Todo(todo.todoUID, todo.todo, todo.todoIsComplete))
    }
}
