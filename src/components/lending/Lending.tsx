import Table from "react-bootstrap/esm/Table";
import { Books } from "../book/Book";
import { Members } from "../member/Member";
import { useEffect, useState } from "react";
import { DeleteLending, GetAllLending, UpdateLending } from "../../service/Lending";
import Button from "react-bootstrap/esm/Button";
import { LendingEdit } from "./LendingEdit";
import { Lendings } from "../types/LendingTypes";


export const Lending = () => {
    const tHeadings: string[] = [
        "#",
        "Lending Id",
        "Book Id",
        "Member Id",
        "Is Active",
        "Over Due",
        "Fine Amount",
        "Options"
    ];

    const [lendings, setLending] = useState<Lendings[]>([]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Lendings | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const getAllData = await GetAllLending();
                // console.log("API Response:", getAllData);
                setLending(getAllData);
            } catch (err) {
                console.error(err);
            }
        };
        loadData();
    }, []);


    const handleDelete = async (lendingId: string) => {
        try {
            await DeleteLending(lendingId);
            setLending(lendings.filter(lending => lending.lendingId !== lendingId));
        } catch (err) {
            console.error("Error deleting lending: " + err);
        }
    };

    const handleEdit = (row: Lendings) => {
        setShowEditForm(true);
        setSelectedRow(row);
    };

    const handleUpdateState = (updatedLending: Lendings) => {
        setLending((prevLendings) =>
            prevLendings.map((lending) =>
                lending.lendingId === updatedLending.lendingId ? updatedLending : lending
            )
        );
    };



    const handleOnClose = () => {
        setShowEditForm(false);
    };

    return (
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>
            <Table striped="columns" style={{ minWidth: "600px", borderCollapse: "separate" }}>
                <thead>
                    <tr>
                        {tHeadings.map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {lendings.map((row, rowIndex) => (
                        <tr key={row.lendingId}>
                            <td>{rowIndex + 1}</td>
                            <td>{row.lendingId}</td>
                            <td>{row.book?.bookId}</td>
                            <td>{row.member?.memberId}</td>
                            <td>{row.isActive ? "Yes" : "No"}</td>
                            <td>{row.overDue}</td>
                            <td>{row.fineAmount}</td>
                            <td>
                                <Button variant="outline-secondary" onClick={() => handleEdit(row)}>Edit</Button>
                                <Button variant="outline-danger" onClick={() => handleDelete(row.lendingId)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table>

            <LendingEdit show={showEditForm} selectedRow={selectedRow} handleOnClose={handleOnClose} update={UpdateLending} handleUpdateState={handleUpdateState} />
        </div>
    );
};
