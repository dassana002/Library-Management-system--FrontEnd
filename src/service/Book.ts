import axios from 'axios';

const baseUrl = "http://localhost:1111/librarySoftware/api/v1/book";

// All Request ekakama back end ekata yaddi header eke token eka yanna one 
const fetchToken = () => {
    const token = localStorage.getItem("cmjd109");
    return "Bearer" + token;
}

export const GetBooks = async () => {

    // Token Add to Request

    try {
        const response = await axios.get(
            `${baseUrl}/getall`,{
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
        return response.data;

    } catch (err) {
        console.error(err);
    }
};

export const GetBookbyId = async (book: string) => {
    
    // Token Add to Request

    try {
        const response = await axios.get(
            `${baseUrl}/${book}`,{
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
        return response.data;
    
    } catch (err) {
        console.error(err);
    }
};

export const DeleteBook = async (bookId: string) => {

    // Token Add to Request

    try {
        await axios.delete(`${baseUrl}/${bookId}`,{
            headers: {
                Authorization: fetchToken()
            }
        });
    } catch (err) {
        console.error(err);
    }
}

export const UpdateBooks = async (book: any) => {

    // Token Add to Request

    try {
        await axios.put(`${baseUrl}/${book.bookId}`, book,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }
        );
    } catch (err) {
        console.error("Error updating book:" + err);
    }
};

export const AddBook = async (book: any) => {

    // Token Add to Request
    
    try {
        await axios.post(`${baseUrl}/addBook`, book,
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

