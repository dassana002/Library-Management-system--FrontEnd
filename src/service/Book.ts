import axios from 'axios';

const baseUrl = "http://localhost:1111/librarySoftware/api/v1/book";

export const GetBooks = async() => {
    try {
        const response = await axios.get(`${baseUrl}/getAllBook`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const GetBookbyId = async(book :string ) => {
    try {
        const response = await axios.get(`${baseUrl}/${book}`);
        console.log(response);
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
export const UpdateBooks = async(book: any) => {
    try {
        await axios.put(`${baseUrl}/${book.bookId}`,book);
    } catch (err) {
        console.error("Error updating book:"+ err);
    }
};

export const AddBook = async(book :any)=> {
    try {
        await axios.post(`${baseUrl}/addBook`,book);
    } catch (err) {
        console.error(err);
    }
}

