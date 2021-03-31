import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshList } from "../../redux/User/User.actions"
import { UserProps, User } from "../../redux/User/User.types"
import "./UserList.css"

interface RootState {
    users: any
}
const UserList = ({ users }: UserProps) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshList)
    }
    return (
        <div className="userMainWrapper">
            <button onClick={handleClick}>Refresh</button>
            <div className="cardUsersWrapper">
                {users.map((user: User) => (
                    <div key={user.id} className="card-USERS">
                        <div className="usersAvatarContainer">
                            <img className="usersAvatar" src={user.avatar} alt={user.first_name} />
                            <div className="userFNameLName">{user.first_name + " " + user.last_name}</div>
                            <div className="userEmail">{user.email}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    console.log(state.users)
    return {
        users: state.users.users,
    }
}

export default connect(mapStateToProps)(UserList)
