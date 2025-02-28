import axios from 'axios';

const getAllBookURL = "http://localhost:2222/librarySoftware/api/v1/book/getAllbook";

export const GetBooks = async () =>{
    try {
        const response = await axios.get(getAllBookURL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}