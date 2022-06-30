export interface IAction {
    type: string,
    payload: any
}

export interface IInitialState {
    users: [],
    updateModalToggle: boolean
}

export interface IState{
    usersReducer: IUsersReducer
    updateModalReducer: IUpdateModalReducer
    depositMoneyReducer: IUpdateModalReducer
}

export interface IUpdateModalReducer{
    isOpen: boolean
}

export interface IUsersReducer{
    users: IUsersList
}

export interface IUsersList {
    0: [IUsers]
}

export interface IUsers{
    _id: string ,
    master: string,
    affiliate: string,
    email: string,
    name: string,
    phone: string,
    referrer_count: number,
    referrer: number,
    active_bonus: number,
    balance: string,
    verification: string,
    status: boolean,
    actions: []
}
