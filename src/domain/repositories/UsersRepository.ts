import { User } from "../entities/Users"

export interface UserRepository {
    GetUsers(): Promise<User[]>
}
