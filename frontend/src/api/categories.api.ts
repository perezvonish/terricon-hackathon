import axios from "@/core/axios";

export interface CategoryResponse {
    id: number
    title: string
}

export const categoriesGetList = async () => {
    return await axios.get("category/list").then(data => {
        return data
    })
}