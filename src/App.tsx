import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import todos from "./app/redux/Todo/Todo.reducers"
import TodoRouteManager from "./app/TodoRouteManager"

const reducers = combineReducers({ todos })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
    return (
        <Provider store={store}>
            <TodoRouteManager />
        </Provider>
    )
}

export default App
