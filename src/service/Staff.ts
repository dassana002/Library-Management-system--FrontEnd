import axios from "axios";

const baseURL = "http://localhost:1111/librarySoftware/api/v1/staff";

export const GetAllStaff = async()=> {
    try {
        const response = await axios.get(`${baseURL}`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
}