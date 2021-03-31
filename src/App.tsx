import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import users from "./app/redux/User/User.reducers"
import UserRouteManager from "./app/UserRouteManager"

const reducers = combineReducers({ users })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
    return (
        <Provider store={store}>
            <UserRouteManager />
        </Provider>
    )
}

export default App
