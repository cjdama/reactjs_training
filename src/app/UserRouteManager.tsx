import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import UserList from "./pages/user/UserList"

const UserRouteManager = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={UserList} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}

export default UserRouteManager
