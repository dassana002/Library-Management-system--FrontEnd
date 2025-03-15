import Table from "react-bootstrap/esm/Table";
import { Books } from "../book/Book";
import { Members } from "../member/Member";
import { useEffect, useState } from "react";
import { DeleteLending, GetAllLending } from "../../service/Lending";
import Button from "react-bootstrap/esm/Button";
import { LendingEdit } from "./LendingEdit";

interface Lendings {
    lendingId: string;
    book: Books;
    member: Members;
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
        "Is Avtive",
        "Over Due",
        "Fine Amount",
        "Options"
    ]

    const [lendings, setLending] = useState<Lendings[]>([]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedRow, setSelectedRow]= useState<Lendings | null>(null);

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

    const handleDelete = async(lendingId :string)=> {
        try {
            await DeleteLending(lendingId);
            setLending(lendings.filter((lending)=> lending.lendingId !== lendingId ));
        } catch (err) {
            console.error("Error lending "+ err);
        }
    }

    const handleEdit = (row :Lendings)=> {
        setShowEditForm(true);
        setSelectedRow(row);
    }

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
                                <Button variant="outline-secondary" 
                                    onClick={
                                        ()=> handleEdit(row)}
                                > Edit </Button>
                                <Button variant="outline-danger" 
                                    onClick={
                                        ()=> handleDelete(row.lendingId)}
                                > Delete </Button>
                            </td>
                        </tr>
                    ))}

                </tbody>

                <tfoot style={{ position: "sticky", bottom: 0, background: "#fff", zIndex: 2 }}></tfoot>
            </Table>

            <LendingEdit
                show = {showEditForm}
                selectedRow = {selectedRow}
            />
        </div>
    );
}