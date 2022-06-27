export interface IUpdateUser {
    name: string | undefined, 
    master: string | undefined, 
    affiliate: string | undefined,  
    active_bonus: number | undefined,
    referrer_count: number | undefined, 
    referrer: number | undefined
}

export interface IRequestOptions{
    method: string,
    headers: Headers,
    body: any,
}

export interface ITextField {
    label: string,
    type: string,
    change: Function,
    prop: string,
}