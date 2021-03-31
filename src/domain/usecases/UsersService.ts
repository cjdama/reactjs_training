import { User } from "../entities/Users"
import { UserRepository } from "../repositories/UsersRepository"

export interface UserService {
    GetItems(): Promise<User[]>
}

export class UserServiceImpl implements UserService {
    userRepo: UserRepository

    constructor(ir: UserRepository) {
        this.userRepo = ir
    }

    async GetItems(): Promise<User[]> {
        return this.userRepo.GetItems()
    }
}
