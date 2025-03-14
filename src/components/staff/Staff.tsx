import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { DeleteStaff, GetAllStaff } from "../../service/Staff";
import Button from "react-bootstrap/esm/Button";
import { StaffEdit } from "./StaffEdit";

export const Staff = () => {

    const tHeadings: string[] = [
        "#",
        "StaffId",
        "FirstName",
        "LastName",
        "Email",
        "JoinDate",
        "LastUpdated",
        "Role",
        "Options"
    ];

    interface Staff {
        staffId: string;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
    }

    const [staffs, setStaff] = useState<Staff[]>([]);
    const [showEditForm, setShowEditForm] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            const getAll = await GetAllStaff();
            setStaff(getAll);
        }

        loadData();
    })

    const handleEdit = (staff :Staff) => {
        setShowEditForm(true);
    }

    const handleDelete = async(staffId :string) => {
        try {
            await DeleteStaff(staffId);
            setStaff(
                staffs.filter((staff)=>
                    staff.staffId !== staffId
                )
            )
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>
            <Table striped="columns" style={{ minWidth: "600px", borderCollapse: "separate" }}>

                <thead style={{ position: "sticky", top: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        {tHeadings.map((Header) => (
                            <th>{Header}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {staffs.map((row, index) =>

                        <tr key={row.staffId}>
                            <td>{index + 1}</td>
                            {Object.values(row).map((cell, index) =>
                                <td key={index}>{cell}</td>
                            )}
                            <th>
                                <Button variant="outline-secondary"
                                    onClick={
                                        ()=> handleEdit(row)
                                    }
                                > Edit </Button>
                                <Button variant="outline-danger"
                                    onClick={
                                        ()=> handleDelete(row.staffId)
                                    }
                                > Delete </Button>
                            </th>
                        </tr>
                    )}

                </tbody>

                <tfoot style={{ position: "sticky", bottom: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        <td colSpan={tHeadings.length + 2}
                            style={{ textAlign: "center", fontWeight: "bold", padding: "10px" }}></td>
                    </tr>
                </tfoot>
            </Table>
            
            <StaffEdit
                show = {showEditForm}
            />
        </div>
    );
}