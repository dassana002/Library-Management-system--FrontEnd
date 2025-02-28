import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { GetBooks } from "../service/Book";

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
        "Last Updated Time"
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

    const [books,setBooks]= useState<Books[]>([]);

    useEffect(()=> {
        const loadData = async () => {
            const getAllBooks = await GetBooks(); 
            setBooks(getAllBooks);   
        }

        loadData();
    });

    return(
        <div>
            <Table striped="columns">
                <thead>
                    <tr>
                        {/* <th> Number </th> */}
                        {tHeadings.map((headings)=>(
                            <th>{headings}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {books.map((row)=>(
                        <tr key={row.bookId}>
                            {Object.values(row).map((cell,index)=> (
                                <td key={index}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}