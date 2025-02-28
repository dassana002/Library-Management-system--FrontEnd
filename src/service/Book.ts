import axios from 'axios';

const getAllBookURL = "http://localhost:2222/librarySoftware/api/v1/book/getAllbook";

export const GetBooks = async () =>{
    try {
        const responce = await axios.get(getAllBookURL);
    } catch (error) {
        console.error(error);
    }
}