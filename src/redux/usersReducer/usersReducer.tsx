import { initialState, usersActionCreator } from "./usersReducerDetails"
import { IAction } from "./usersReducerTypes"

export const usersReducer = ((state = initialState, action: IAction) => {
    if (action.type === "getUsers"){
        return {
            ...state,
            users: [action.payload]
        }
    }else if (action.type === "selectUser"){
        return {
            ...state, 
            selectedUserId: action.payload
        }
    }
    return state
})

export const fetchData = () => {
    return (dispatch: any) => {
        const bearerToken = localStorage.getItem("access_token")
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${bearerToken}`);


        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
        };

        fetch(`${process.env.REACT_APP_BASEURL}/v1/users`, requestOptions)
            .then(response => response.json())
            .then(result => dispatch(usersActionCreator(result)))
            .catch(error => console.log('error', error));
    }
}