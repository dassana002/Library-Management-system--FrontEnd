import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { AddBook, DeleteBook, GetBooks, UpdateBooks } from "../../service/Book";
import Button from "react-bootstrap/esm/Button";
import { BookEdit } from "./BookEdit";
import { BookAdd } from "./BookAdd";
import { useLocation } from "react-router";

export interface Books {
    bookId: string;
    title: string;
    publisher: string;
    isbn: string;
    author: string;
    edition: string;
    price: number;
    totalQty: number;
    avilableQty: number;
    lastUpdatedDate?: string;
    lastUpdatedTime?: string;
}

export const Book = () => {
    // const location = useLocation(); 
    
    const tHeadings: string[] = [
        "BookId",
        "Title",
        "Publisher",
        "ISBN",
        "Author",
        "Edition",
        "Price",
        "Total Qty",
        "Available Qty",
        "Last Updated Date",
        "Last Updated Time",
        "Options"
    ];

    const [books, setBooks] = useState<Books[]>([]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedRow, setSelectRow] = useState<Books | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const getAllBooks = await GetBooks();
                setBooks(getAllBooks || []);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        loadData();
    }, []);

    // Update Book
    const handleOnEdit = (row: Books) => {
        setShowEditForm(true);
        setSelectRow(row);
    };

    const handleUpdateState = (updatedBook: Books) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.bookId === updatedBook.bookId ? updatedBook : book
            )
        );
    };

    const handleOnClose = () => {
        setShowEditForm(false);
    };

    // Delete Book
    const handleOnDelete = async (bookId: string) => {
        try {
            await DeleteBook(bookId);
            setBooks((prevBooks) => prevBooks.filter((book) => book.bookId !== bookId));
        } catch (err) {
            console.error("Error deleting book:", err);
        }
    };

    const handleAdd = (newBook :Books)=> {
        setBooks((prev)=> [...prev , newBook]);
    }

    return (
        <div>
        {/* <div>Current Path: {location.pathname}</div> */}
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>

            <div className="d-flex justify-content-end p-3">
                <Button variant="outline-primary" 
                    onClick={
                        ()=> setShowAddForm(true)}
                >Add Book</Button>
            </div>

            <Table striped bordered hover style={{ minWidth: "600px" }}>
                <thead style={{ position: "sticky", top: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        <th scope="col">#</th>
                        {tHeadings.map((heading, index) => (
                            <th key={index} scope="col">{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {books.map((row, rowIndex) => (
                        <tr key={row.bookId}>
                            <th scope="row">{rowIndex + 1}</th>
                            <td>{row.bookId}</td>
                            <td>{row.title}</td>
                            <td>{row.publisher}</td>
                            <td>{row.isbn}</td>
                            <td>{row.author}</td>
                            <td>{row.edition}</td>
                            <td>{row.price}</td>
                            <td>{row.totalQty}</td>
                            <td>{row.avilableQty}</td>
                            <td>{row.lastUpdatedDate}</td>
                            <td>{row.lastUpdatedTime}</td>
                            <td>
                                <Button variant="outline-secondary" onClick={() => handleOnEdit(row)}> Edit </Button>
                                <Button variant="outline-danger" onClick={() => handleOnDelete(row.bookId)}> Delete </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


            <BookEdit
                show={showEditForm}
                selectedRow={selectedRow}
                handleOnClose={handleOnClose}
                updateBooks={UpdateBooks}
                handleUpdateState={handleUpdateState}
            />

            <BookAdd
                show ={showAddForm}
                handleOnClose={()=> setShowAddForm(false)}
                addbooks={AddBook}
                handleAdd={handleAdd}
            />        
        </div>
        </div>
    );
};