import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { DeleteBook, GetBooks, UpdateBook } from "../../service/Book";
import Button from "react-bootstrap/esm/Button";
import { BookEdit } from "./BookEdit";

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

    interface Book {
        bookId: string;
        title: string;
        publisher: string;
        isbn: string;
        author: string;
        edition: string;
        price: number;
        totalQty: number;
        avilableQty: number; 
        lastUpdatedDate: string; 
        lastUpdatedTime: string; 
    }

    const [books , setBooks] = useState<Book[]>([]);                    // Table eke books rows wla changers kragann use krai
    const [showEditForm , setShowEditForm] = useState(false);           // Edit Form eka show kranna use krai
    const [selectedRow , setSelectRow] = useState<Book | null>(null);   // select krapu row eka Edit form ekata pass kragann use krano
 
    useEffect(()=> {  // component eka Mount wena time ekedi wenn one wada kragann puluwan UseEffect() method eka use krala
        const loadData = async() => {
            const getAllBooks = await GetBooks(); // Books Data Object Array ekk (JSON) BackEnd eken apita enne 
            setBooks(getAllBooks);   
        }

        loadData();
    },[]);

    
    const handleOnEdit = async(row :Book)=> {
        setShowEditForm(true);
        setSelectRow(row);
    }

    const handleOnDelete = async(bookId :string)=> {
        try {
            await DeleteBook(bookId);
            setBooks(
                books.filter(
                    (book)=> 
                        book.bookId !== bookId 
                )
            );
        } catch (err) {
            console.error(err);
        }
    }

    const handleOnClose = ()=> {
        setShowEditForm(false);
    }

    // const updateBooks = ()=> {  // BookEdit form eke changers Book Component ekata update kranwa

    // }

    return (

        // Book  (Parent Component)

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
                            
                            {Object.values(row).map(
                                (cell, index) => (
                                    <td key={index}>{cell}</td>
                                )
                            )};

                            <td>
                                <Button variant="outline-secondary" onDoubleClick={()=> handleOnEdit(row)}> Edit </Button>
                                <Button variant="outline-danger" onDoubleClick={()=> handleOnDelete(row.bookId)}> Delete </Button>
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

        {/*  BookEdit  (Child Component) */}
        {/* show and selectedRow is arguments (Properties / Pops ) */}
            <BookEdit     
                show = {showEditForm} 
                selectedRow = {selectedRow}
                handleOnClose = {handleOnClose}
                // updateBooks = {updateBooks}
            />        
        </div>
    );
}


