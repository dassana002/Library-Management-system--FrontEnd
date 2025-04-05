import axios from "axios";

const baseURL = "http://localhost:1111/librarySoftware/api/v1/member";

// All Request ekakama back end ekata yaddi header eke token eka yanna one 
const fetchToken = () => {
    const token = localStorage.getItem("cmjd109");
    return "Bearer" + token;
}

export const GetAllMembers = async () => {

    try {
        const response = await axios.get(baseURL,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
        return response.data;

    } catch (err) {
        console.error("Error fetching members:", err);
        return [];
    }
};

export const GetMemberById = async (member :string) => {

    try {
        const response = await axios.get(`${baseURL}/${member}`,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
        return response.data;
    } catch (err) {
        console.error("Error fetching members:", err);
        return [];
    }
};

export const DeleteMember = async (memberId: string) => {
    try {
        await axios.delete(`${baseURL}/${memberId}`,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );

    } catch (err) {
        console.error("Error deleting member:", err);
    }
};

export const UpdateMember = async(member: any) => {
    try {
        const response = await axios.put(`${baseURL}/${member.memberId}`, member,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
        return response.data; 
    } catch (err) {
        console.error("Error updating member:", err);
    }
};

export const SaveMember = async(newMember :any)=>{
    try {
        await axios.post(`${baseURL}`,newMember,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );             
    } catch (error) {
        console.error(error);
    }
}
