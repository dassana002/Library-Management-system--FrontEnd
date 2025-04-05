import axios from "axios";

const baseURL = "http://localhost:1111/librarySoftware/api/v1/lending"

// All Request ekakama back end ekata yaddi header eke token eka yanna one 
const fetchToken = () => {
    const token = localStorage.getItem("cmjd109");
    return "Bearer" + token;
}

export const GetAllLending = async()=> {
    try {
        const getData = await axios.get(`${baseURL}/getAll`,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
        return getData.data;
    } catch (err) {
        console.error(err);
        return [];
    }
}

export const DeleteLending = async(LendingId :string)=> {
    try {
        await axios.delete(`${baseURL}/${LendingId}`,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
    } catch (err) {
        console.error(err)
        return [];
    }
}

export const UpdateLending = async(row :any)=> {
    try {
        await axios.put(`${baseURL}/${row.lendingId}`,row,
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

export const SaveLending = async (newLending: any) => {
    try {
        await axios.post(`${baseURL}/Add`, newLending,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
    } catch (error: any) {
        console.error("API Error:", error.response?.data || error.message);
    }
};

