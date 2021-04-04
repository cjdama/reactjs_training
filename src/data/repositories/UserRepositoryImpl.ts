import { User } from "../../domain/entities/Users"
import { UserRepository } from "../../domain/repositories/UsersRepository"

class UserDTO {
    id = 0
    first_name = ""
    last_name = ""
    email = ""
    avatar = ""
}

export class UserRepositoryImpl implements UserRepository {
    jsonUrl = "https://reqres.in/api/users?page=1"
    async GetUsers(): Promise<User[]> {
        const res = await fetch(this.jsonUrl)
        const jsonData = await res.json()
        return jsonData.data.map(
            (user: UserDTO) => new User(user.id, user.first_name, user.last_name, user.email, user.avatar),
        )
    }
}
