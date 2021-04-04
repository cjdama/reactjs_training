import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE, RefreshTodoListSuccess } from "./Todo.types"

const initialState = {
    loading: false,
    todos: [],
}

function todos(state = initialState, action: { type: string; payload: RefreshTodoListSuccess }) {
    switch (action.type) {
        case LIST_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case LIST_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
            }

        case LIST_LOAD_SUCCESS:
            console.log(typeof action.payload)
            return {
                ...state,
                todos: action.payload,
                loading: false,
            }

        default:
            return state
    }
}
export default todos
