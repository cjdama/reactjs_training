import React, { useEffect, useState } from "react"
import { connect, useDispatch } from "react-redux"
import { refreshList, createTodo, deleteTodo, updateTodo, completeTodo } from "../../redux/Todo/Todo.actions"
import { TodoProps, Todo } from "../../redux/Todo/Todo.types"
//import { format } from 'date-fns';
import "./TodoList.css"

interface RootState {
    todos: any
}
const TodoList = ({ todos }: TodoProps) => {
    const dispatch = useDispatch()

    const [fortodo, setForTodo] = useState("")
    const [forupdateTodo, setForupdateTodo] = useState("")
    const [updatetodoUID, setUpdatetodoUID] = useState(0)
    const [forSaveTodotoUpdate, setForSaveTodotoUpdate] = useState("")
    const [displayInputforUpdate, setDisplayInputforUpdate] = useState(false)
    useEffect(() => {
        dispatch(refreshList)
    }, [dispatch])

    const createNewTodo = () => {
        const todoDatas = {
            todo: fortodo,
            todoIsComplete: false,
        }
        dispatch(createTodo(todoDatas))
        setForTodo("")
    }
    return (
        <div>
            <form
                autoComplete="off"
                onSubmit={(e) => {
                    e.preventDefault()
                    createNewTodo
                }}
            >
                <div className="todoListWrapper">
                    <div className="todoContainer">
                        <div className="todoHeader">
                            <h1>TODO LIST</h1>
                        </div>
                        <div className="todoInputContainer">
                            <input
                                type="text"
                                placeholder="Enter your list here"
                                value={fortodo}
                                onChange={(e) => setForTodo(e.target.value)}
                            />
                        </div>
                        <div className="todoSubmitContainer">
                            <button type="submit" onClick={createNewTodo}>
                                Add
                            </button>
                        </div>
                        <div className="todoListContainer">
                            {displayInputforUpdate ? (
                                <div className="editTodo">
                                    <input
                                        type="text"
                                        placeholder={forSaveTodotoUpdate}
                                        value={forupdateTodo}
                                        onChange={(e) => setForupdateTodo(e.target.value)}
                                    />
                                    <button
                                        className="saveUpdateTodo"
                                        onClick={() => {
                                            const todoDatas = {
                                                todoUID: updatetodoUID,
                                                todo: forupdateTodo,
                                            }
                                            dispatch(updateTodo(todoDatas))
                                            setDisplayInputforUpdate(false)
                                            setForupdateTodo("")
                                        }}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="cancelUpdateTodo"
                                        onClick={() => {
                                            setDisplayInputforUpdate(false)
                                            setForupdateTodo("")
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                console.log("Updatestatus", displayInputforUpdate)
                            )}
                            <table>
                                <thead>
                                    <tr>
                                        <th>List</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todos.map((todo: Todo, index) => (
                                        <tr key={index}>
                                            <td
                                                className={todo.todoIsComplete ? "todoStats" : undefined}
                                                onClick={() => {
                                                    const todoStatus = todo.todoIsComplete ? false : true
                                                    const todoDatas = {
                                                        todoUID: todo.todoUID,
                                                        todoIsComplete: todoStatus,
                                                    }
                                                    dispatch(completeTodo(todoDatas))
                                                }}
                                            >
                                                <label>{todo.todo}</label>
                                            </td>
                                            <td className="actionsContainer">
                                                <button
                                                    className="update"
                                                    onClick={() => {
                                                        setDisplayInputforUpdate(true),
                                                            setForSaveTodotoUpdate(todo.todo),
                                                            setUpdatetodoUID(todo.todoUID)
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="delete"
                                                    onClick={() => {
                                                        const todoDatas = {
                                                            todoUID: todo.todoUID,
                                                            todoIsComplete: todo.todoIsComplete,
                                                        }
                                                        dispatch(deleteTodo(todoDatas))
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    console.log(state.todos)
    return {
        todos: state.todos.todos,
    }
}

export default connect(mapStateToProps)(TodoList)
