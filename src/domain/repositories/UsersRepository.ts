import { User } from "../entities/Users"

export interface UserRepository {
    GetItems(): Promise<User[]>
}
