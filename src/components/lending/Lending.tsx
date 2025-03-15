import Table from "react-bootstrap/esm/Table";
import { Books } from "../book/Book";
import { Members } from "../member/Member";
import { useEffect, useState } from "react";
import { GetAllLending } from "../../service/Lending";
import Button from "react-bootstrap/esm/Button";

interface Lendings {
    lendingId: string;
    book: Books;
    member: Members;
    lendingDate: string;
    returnDate?: string;
    isActive: boolean;
    overDue?: number;
    fineAmount?: number;
}

export const Lending = () => {

    const tHeadings: string[] = [
        "#",
        "Lending Id",
        "Book Id",
        "Member Id",
        "Lending Date",
        "Return Date",
        "Is Avtive",
        "Over Due",
        "Fine Amount",
        "Options"
    ]

    const [lendings, setLending] = useState<Lendings[]>([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const getAllData = await GetAllLending();
                setLending(getAllData);
            } catch (err) {
                console.error(err);
            }
        }
        loadData();
    }, [])

    return (
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>
            <Table striped="columns" style={{ minWidth: "600px", borderCollapse: "separate" }}>
                <thead style={{ position: "sticky", top: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        {tHeadings.map((heading, index) => (
                            <th key={index}> {heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {lendings.map((row, rowindex) => (
                        <tr key={row.lendingId}>
                            <td>{rowindex + 1}</td>
                            {Object.values(row).map((cell, index) => (
                                <td key={index}>{cell}</td>
                            ))}
                            <td>
                                <Button variant="outline-secondary"> Edit </Button>
                                <Button variant="outline-danger" > Delete </Button>
                            </td>
                        </tr>
                    ))}

                </tbody>

                <tfoot style={{ position: "sticky", bottom: 0, background: "#fff", zIndex: 2 }}>

                </tfoot>
            </Table>
        </div>
    );
}