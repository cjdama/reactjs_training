import { Todo } from "../entities/Todos"

export interface TodoRepository {
    GetTodos(): Promise<Todo[]>
    createTodo(data: any): any
    deleteTodo(data: any): any
    updateTodo(data: any): any
    completeTodo(data: any): any
}
