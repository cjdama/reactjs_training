import React from "react"
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TodoList from "./pages/todo/TodoList"

const TodoRouteManager = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={TodoList} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}

export default TodoRouteManager
