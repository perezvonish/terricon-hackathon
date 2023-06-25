import axios from "@/core/axios";

export enum UserRegisterRoles {
    CLIENT = 'CLIENT',
    EMPLOYER = 'EMPLOYER',
}

export interface AuthRegister {
    phoneNumber: string,
    name: string,
    surname: string,
    password: string,
    repeatPassword: string,
    role: UserRegisterRoles
}

export interface AuthRegisterResponse {
    id: number,
    phoneNumber: string
}

export interface AuthLogin {
    phoneNumber: string,
    password: string
}

export interface AuthLoginResponse {
    token: string
}

export const authRegisterRequest = async (data: AuthRegister) => {
    return await axios.post("/auth/register", data).then(data => {
        return data
    })
}

export const authLoginRequest = async (data: AuthLogin) => {
    return await axios.post("auth/login", data).then(data => {
        return data
    })
}