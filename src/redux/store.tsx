import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import { usersReducer } from "./usersReducer/usersReducer"
import {updateModalReducer} from "./updateModalReducer/updateModalReducer"
import {depositMoneyReducer} from "./depositMoneyReducer/depositMoneyReducer"

export const store = createStore(combineReducers({
    usersReducer,
    updateModalReducer,
    depositMoneyReducer
}), applyMiddleware(thunk))