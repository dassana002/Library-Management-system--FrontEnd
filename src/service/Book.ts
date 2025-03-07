import axios from 'axios';

const baseUrl = "http://localhost:2222/librarySoftware/api/v1/book";

export const GetBooks = async() => {
    try {
        const response = await axios.get(`${baseUrl}/getAllbook`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const DeleteBook = async(bookId :string) => {
    try {
        await axios.delete(`${baseUrl}/${bookId}`);
    } catch (err) {
        console.error(err);
    }
}

export const UpdateBook = async(bookId :string) => {
    try {
        const responce = await axios.put(`${baseUrl}/${bookId}`);
        return responce.data;
    } catch (err) {
        console.error(err);
    }
}

