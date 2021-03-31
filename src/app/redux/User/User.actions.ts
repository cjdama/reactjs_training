import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE } from "./User.types"
import { UserServiceImpl } from "../../../domain/usecases/UsersService"
import { UserRepositoryImpl } from "../../../data/repositories/UserRepositoryImpl"

export const refreshList = async (dispatch: any) => {
    dispatch({ type: LIST_LOAD_REQUEST })

    try {
        const userRepo = new UserRepositoryImpl()
        const userService = new UserServiceImpl(userRepo)
        const users = await userService.GetItems()
        dispatch({ type: LIST_LOAD_SUCCESS, payload: users })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}
