import { Todo } from "../entities/Todos"
import { TodoRepository } from "../repositories/TodoRepository"

export interface TodoService {
    GetTodos(): Promise<Todo[]>
}

export class TodoServiceImpl implements TodoService {
    todoRepo: TodoRepository

    constructor(ir: TodoRepository) {
        this.todoRepo = ir
    }

    async GetTodos(): Promise<Todo[]> {
        return this.todoRepo.GetTodos()
    }

    async createTodo(data: any) {
        const todoInput = data.todo.trim()
        const today = new Date()
        const end = new Date()
        const DateforUID = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
        console.log("Date Created-->>", DateforUID)
        let dayCount = 0
        while (end > today) {
            dayCount++
            today.setDate(today.getDate() + 1)
        }
        console.log("Number of Days -->>", dayCount)
        if (todoInput.length === 0) {
            throw alert("Invalid Input")
        } else {
            return this.todoRepo.createTodo(data)
        }
    }

    DeleteTodo(data: Todo) {
        if (data.todoIsComplete === true) {
            throw alert("Invalid Input")
        } else {
            return this.todoRepo.deleteTodo(data)
        }
    }

    UpdateTodo(data: Todo) {
        const todoUpdateInput = data.todo.trim()
        if (todoUpdateInput.length === 0) {
            throw alert("Invalid Input")
        } else {
            return this.todoRepo.updateTodo(data)
        }
    }

    CompleteTodo(data: Todo) {
        return this.todoRepo.completeTodo(data)
    }
}
