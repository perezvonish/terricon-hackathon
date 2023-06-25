import axios from "@/core/axios";
import {UserRegisterRoles} from "@/api/auth.api";

export interface UserGetByIDResponse {
    id: number;
    phoneNumber: string;
    email: string;
    country: string;
    birthday: Date;
    bio: string;
    name: string;
    surname: string;
    isVerify: boolean;
    role: UserRegisterRoles;
    createdAt: Date;
    updatedAt: Date;
}

export const userGetByIdRequest = async (id: number) => {
    return await axios.get(`/user/${id}`).then(data => {
        return data
    })
}