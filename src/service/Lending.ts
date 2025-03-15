import axios from "axios";

const baseURL = "http://localhost:1111/librarySoftware/api/v1/lending"

export const GetAllLending = async()=> {
    try {
        const getData = await axios.get(`${baseURL}/getAll`);
        return getData.data;
    } catch (err) {
        console.error(err);
        return [];
    }
}