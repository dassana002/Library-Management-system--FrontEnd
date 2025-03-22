import axios from "axios";

const baseURL = "http://localhost:1000/librarySoftware/api/v1/lending"

export const GetAllLending = async()=> {
    try {
        const getData = await axios.get(`${baseURL}/getAll`);
        return getData.data;
    } catch (err) {
        console.error(err);
        return [];
    }
}

export const DeleteLending = async(LendingId :string)=> {
    try {
        await axios.delete(`${baseURL}/${LendingId}`);
    } catch (err) {
        console.error(err)
        return [];
    }
}

export const UpdateLending = async(row :any)=> {
    try {
        await axios.put(`${baseURL}/${row.lendingId}`,row);
    } catch (err) {
        console.error(err);
    }
}

export const SaveLending = async (newLending: any) => {
    try {
        const resp = await axios.post(`${baseURL}/Add`, newLending, {
            headers: { "Content-Type": "application/json" }
        });
        return resp.data;
    } catch (error: any) {
        console.error("API Error:", error.response?.data || error.message);
    }
};

