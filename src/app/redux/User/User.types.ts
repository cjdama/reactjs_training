export const LIST_LOAD_REQUEST = "LIST_LOAD_REQUEST"
export const LIST_LOAD_SUCCESS = "LIST_LOAD_SUCCESS"
export const LIST_LOAD_FAILURE = "LIST_LOAD_FAILURE"

export type UserProps = {
    users: User[]
    refreshList: () => User[]
}

export type UserActionType = RefreshUserListSuccess

export interface RefreshUserListSuccess {
    type: typeof LIST_LOAD_SUCCESS
    payload: User[]
}

export interface User {
    id: number
    first_name: string
    last_name: string
    email: string
    avatar: string
}
