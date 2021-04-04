import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE } from "./Todo.types"
import { TodoServiceImpl } from "../../../domain/usecases/TodosService"
import { TodoSessionStorageRepositoryImpl } from "../../../data/repositories/TodoSessionStorageRepositoryImpl"

export const refreshList = async (dispatch: any) => {
    dispatch({ type: LIST_LOAD_REQUEST })

    try {
        const todoRepo = new TodoSessionStorageRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todos = await todoService.GetTodos()
        dispatch({ type: LIST_LOAD_SUCCESS, payload: todos })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}

export const createTodo = (todo: any) => {
    return async function (dispatch: any) {
        const todoRepo = new TodoSessionStorageRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        await todoService.createTodo(todo).then(() => {
            dispatch(refreshList)
        })
    }
}

export const deleteTodo = (todo: any) => {
    return async function (dispatch: any) {
        const todoRepo = new TodoSessionStorageRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todos = await todoService.DeleteTodo(todo)
        dispatch({ type: LIST_LOAD_SUCCESS, payload: todos })
    }
}

export const updateTodo = (todo: any) => {
    return async function (dispatch: any) {
        const todoRepo = new TodoSessionStorageRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todos = await todoService.UpdateTodo(todo)
        dispatch({ type: LIST_LOAD_SUCCESS, payload: todos })
    }
}

export const completeTodo = (todo: any) => {
    return async function (dispatch: any) {
        const todoRepo = new TodoSessionStorageRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todos = await todoService.UpdateTodo(todo)
        dispatch({ type: LIST_LOAD_SUCCESS, payload: todos })
    }
}
