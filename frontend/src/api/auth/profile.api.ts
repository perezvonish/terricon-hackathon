import axios from "@/core/axios";

export const userGetByIdRequest = async (id: number) => {
    return await axios.get(`/user/by-id?id=${id}`).then(data => {
        return data
    })
}