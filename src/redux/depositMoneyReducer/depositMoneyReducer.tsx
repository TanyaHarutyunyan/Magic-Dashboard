import { initialState } from "./depositMoneyDetails"
import { IAction } from "./depositMoneyTypes"


export const depositMoneyReducer = ((state = initialState, action: IAction) => {
    if (action.type === "setDepositTrue"){
        return {
            isOpen: action.payload
        }
    } else if (action.type === "setDepositFalse"){
        return {
            isOpen: action.payload
        }
    }
    return state
})