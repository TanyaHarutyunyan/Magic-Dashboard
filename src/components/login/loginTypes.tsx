export interface IUserData{
    email: string,
    password: string
}

export interface IRequestOptions{
    method: string;
    headers: Headers;
    body: string | any;
}

export interface ILoginData{
    token?: string;
    error?: string;
}

