export class Todo {
    todoUID: number
    todo: string
    todoIsComplete: boolean

    constructor(todoUID: number, todo: string, todoIsComplete: boolean) {
        this.todoUID = todoUID
        this.todo = todo
        this.todoIsComplete = todoIsComplete
    }
}
