import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import ItemList from "./pages/item/ItemList"

const RouteManager = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ItemList} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}

export default RouteManager
