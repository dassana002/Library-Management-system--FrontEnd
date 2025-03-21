import axios from "axios";

const baseURL = "http://localhost:1000/librarySoftware/api/v1/member";

export const GetAllMembers = async () => {

    try {
        const response = await axios.get(baseURL);
        return response.data;
    } catch (err) {
        console.error("Error fetching members:", err);
        return [];
    }
};

export const GetMemberById = async (member :string) => {

    try {
        const response = await axios.get(`${baseURL}/${member}`);
        return response.data;
    } catch (err) {
        console.error("Error fetching members:", err);
        return [];
    }
};

export const DeleteMember = async (memberId: string) => {
    try {
        await axios.delete(`${baseURL}/${memberId}`);
    } catch (err) {
        console.error("Error deleting member:", err);
    }
};

export const UpdateMember = async(member: any) => {
    try {
        const response = await axios.put(`${baseURL}/${member.memberId}`, member);
        return response.data; 
    } catch (err) {
        console.error("Error updating member:", err);
    }
};

export const SaveMember = async(newMember :any)=>{
    try {
        await axios.post(`${baseURL}`,newMember);             
    } catch (error) {
        console.error(error);
    }
}
