import axios from "@/core/axios";

export interface EmployeeList {

}

export const getEmployeeList = async () => {
    return await axios.get(`/users/list`).then(data => {
        return data
    })
}