import Table from "react-bootstrap/esm/Table";
import { useEffect, useState } from "react";
import { DeleteLending, GetAllLending, SaveLending, UpdateLending } from "../../service/Lending";
import Button from "react-bootstrap/esm/Button";
import { LendingEdit } from "./LendingEdit";
import { LendingAdd } from "./LendingAdd";

export interface Lendings {
    lendingId: string;
    bookId: string;
    memberId: string;
    isActive: boolean;
    overDue: number;
    fineAmount: number;
}

export const Lending = () => {
    const tHeadings: string[] = [
        "#",
        "Lending Id",
        "Book Id",
        "Member Id",
        "Lending Date",
        "Return Date",
        "Is Active",
        "Over Due",
        "Fine Amount",
        "Options"
    ];

    const [lendings, setLendings] = useState<Lendings[]>([]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Lendings | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const getAllData = await GetAllLending();
                setLendings(getAllData);
            } catch (err) {
                console.error("Error fetching lendings:", err);
            }
        };
        loadData();
    }, []);


    const handleDelete = async (lendingId: string) => {
        try {
            await DeleteLending(lendingId);
            setLendings((prevLendings) => prevLendings.filter(lending => lending.lendingId !== lendingId));
        } catch (err) {
            console.error("Error deleting lending: " + err);
        }
    };

    const handleEdit = (row: Lendings) => {
        setShowEditForm(true);
        setSelectedRow(row);
    };

    const handleUpdateState = (updatedLending: Lendings) => {
        setLendings((prevLendings) =>
            prevLendings.map((lending) =>
                lending.lendingId === updatedLending.lendingId ? { ...updatedLending } : lending
            )
        );
    };

    const handleOnClose = () => {
        setShowEditForm(false);
        setShowAddForm(false);
    };

    const handleState = (newLending: Lendings) => {
        setLendings((prevLendings) => [...prevLendings, newLending]);
    };

    return (
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>

            <div className="d-flex justify-content-end p-3">
                <Button variant="outline-primary"
                    onClick={() => setShowAddForm(true)}
                >Add Lending</Button>
            </div>

            <Table striped="columns" style={{ minWidth: "600px", borderCollapse: "separate" }}>
                <thead>
                    <tr>
                        {tHeadings.map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {lendings.length > 0 ? (
                        lendings.map((row, rowIndex) => (
                            <tr key={row.lendingId || rowIndex}>
                                <td>{rowIndex + 1}</td>
                                <td>{row.lendingId}</td>
                                <td>{row.bookId}</td>
                                <td>{row.memberId}</td>
                                <td>{row.isActive ? "Yes" : "No"}</td>
                                <td>{row.overDue}</td>
                                <td>{row.fineAmount}</td>
                                <td>
                                    <Button variant="outline-secondary" onClick={() => handleEdit(row)}>Edit</Button>
                                    <Button variant="outline-danger" onClick={() => handleDelete(row.lendingId)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={tHeadings.length + 1} className="text-center text-muted">
                                No books available.
                            </td>
                        </tr>
                    )}
                </tbody>


            </Table>

            <LendingEdit
                show={showEditForm}
                selectedRow={selectedRow}
                handleOnClose={handleOnClose}
                update={UpdateLending}
                handleUpdateState={handleUpdateState}
            />

            <LendingAdd
                show={showAddForm}
                handleOnClose={() => setShowAddForm(false)}
                update={SaveLending}
                handleState={handleState}
            />
        </div>
    );
};
