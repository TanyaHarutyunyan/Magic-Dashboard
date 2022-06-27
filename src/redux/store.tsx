import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import { usersReducer } from "./usersReducer/usersReducer"
import {updateModalReducer} from "./updateModalReducer/updateModalReducer"

export const store = createStore(combineReducers({
    usersReducer,
    updateModalReducer
}), applyMiddleware(thunk))