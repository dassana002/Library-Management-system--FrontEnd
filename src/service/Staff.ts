import axios from "axios";

const baseURL = "http://localhost:1111/librarySoftware/api/v1/staff";

// All Request ekakama back end ekata yaddi header eke token eka yanna one 
const fetchToken = () => {
    const token = localStorage.getItem("cmjd109");
    return "Bearer" + token;
}

export const GetAllStaff = async()=> {
    try {
        const response = await axios.get(`${baseURL}`,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
        return response.data;
    } catch (err) {
        console.error(err);
    }
}

export const DeleteStaff = async(staffId :string)=> {
    try {
        await axios.delete(`${baseURL}/${staffId}`,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
    } catch (err) {
        console.error(err);
    }
}

export const UpdateStaff = async(staff :any)=> {
    try {
        await axios.put(`${baseURL}/${staff.staffId}`,staff,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
    } catch (err) {
        console.error(err);
    }
}

export const SaveStaff = async(staff :any)=> {
    try {
        await axios.post(`${baseURL}`,staff,
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