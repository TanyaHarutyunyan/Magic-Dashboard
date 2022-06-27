import { initialState } from "./updateModalDetails"
import { IAction } from "./updateModalTypes"


export const updateModalReducer = ((state = initialState, action: IAction) => {
    if (action.type === "setTrue"){
        return {
            isOpen: action.payload
        }
    } else if (action.type === "setFalse"){
        return {
            isOpen: action.payload
        }
    }
    return state
})
