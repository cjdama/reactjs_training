// import { Item } from "../../../domain/entities/Item"
import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE, RefreshUserListSuccess } from "./User.types"

const initialState = {
    loading: false,
    users: [],
}

function users(state = initialState, action: { type: string; payload: RefreshUserListSuccess }) {
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
                users: action.payload,
                loading: false,
            }

        default:
            return state
    }
}
export default users
