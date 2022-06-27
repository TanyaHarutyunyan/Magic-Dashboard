import { IInitialState } from "./usersReducerTypes"

export const initialState: IInitialState = {
    users: [],
    updateModalToggle: false
}

export const usersActionCreator = (usersArray: []) => {
    return {
        type: "getUsers",
        payload: usersArray
    }
}

