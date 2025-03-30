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

export const DeleteStaff = async(staffId :string)=> {
    try {
        await axios.delete(`${baseURL}/${staffId}`);
    } catch (err) {
        console.error(err);
    }
}

export const UpdateStaff = async(staff :any)=> {
    try {
        await axios.put(`${baseURL}/${staff.staffId}`,staff);
    } catch (err) {
        console.error(err);
    }
}

export const SaveStaff = async(staff :any)=> {
    try {
        await axios.post(`${baseURL}`,staff);
    } catch (error) {
        console.error(error);
    }
}