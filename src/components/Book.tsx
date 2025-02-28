import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { DeleteBook, GetBooks } from "../service/Book";
import Button from "react-bootstrap/esm/Button";

export const Book = () => {

    const tHeadings :string[] = [
        "BookId",
        "Title",
        "Publisher",
        "ISBN",
        "Author",
        "Edition",
        "Price",
        "Total Qty",
        "Avl Aty",
        "Last Updated Date",
        "Last Updated Time",
        "Options"
    ];

    interface Books {
        bookId: string;
        title: string;
        publisher: string;
        isbn: string;
        author: string;
        edition: string;
        price: number;
        totalQty: number;
        availableQty: number; 
        lastUpdatedDate: string; 
        lastUpdatedTime: string; 
    }

    const [books,setBooks] = useState<Books[]>([]);

    useEffect(()=> {
        const loadData = async() => {
            const getAllBooks = await GetBooks(); 
            setBooks(getAllBooks);   
        }

        loadData();
    });

    const handleOnDelete = async(bookId :string)=> {
        try {
            DeleteBook(bookId);
            setBooks(
                books.filter((book)=> book.bookId !== bookId )
            );
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>
            <Table striped="columns" style={{ minWidth: "600px", borderCollapse: "separate" }}>
                <thead style={{ position: "sticky", top: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        <th scope="col">Number</th>
                        {tHeadings.map((headings, index) => (
                            <th key={index} scope="col">{headings}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {books.map((row, rowIndex) => (
                        <tr key={row.bookId}>
                            <th scope="row">{rowIndex + 1}</th>
                            {Object.values(row).map((cell, index) => (
                                <td key={index}>{cell}</td>
                            ))};
                            <td>
                                <Button variant="outline-secondary"> Edit </Button>
                                <Button variant="outline-danger" onClick={()=> handleOnDelete(row.bookId)}> Delete </Button>
                                    
                            </td>
                        </tr>
                    ))}
                </tbody>
    
                <tfoot style={{ position: "sticky", bottom: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        <td colSpan={tHeadings.length + 2} 
                            style={{ textAlign: "center", fontWeight: "bold", padding: "10px" }}></td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
}


