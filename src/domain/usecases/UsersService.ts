import { User } from "../entities/Users"
import { UserRepository } from "../repositories/UsersRepository"

export interface UserService {
    GetUsers(): Promise<User[]>
}

export class UserServiceImpl implements UserService {
    userRepo: UserRepository

    constructor(ir: UserRepository) {
        this.userRepo = ir
    }

    async GetUsers(): Promise<User[]> {
        return this.userRepo.GetUsers()
    }
}
