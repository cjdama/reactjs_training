import React from "react"
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
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
