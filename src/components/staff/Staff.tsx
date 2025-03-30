import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { DeleteStaff, GetAllStaff, SaveStaff, UpdateStaff } from "../../service/Staff";
import { StaffEdit } from "./StaffEdit";
import { StaffAdd } from "./StaffAdd";

export interface Staff {
    staffId: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

export const Staff = () => {
    const tHeadings: string[] = [
        "#", "StaffId", "FirstName", "LastName", "Email", "JoinDate", "LastUpdated", "Role", "Options"
    ];

    const [staffs, setStaff] = useState<Staff[]>([]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Staff | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const getAll = await GetAllStaff();
                setStaff(getAll || []); // Ensures an empty array if data is undefined
            } catch (error) {
                console.error("Failed to fetch staff data", error);
                setStaff([]); // Prevents undefined state
            }
        };
        loadData();
    }, []); // ✅ Runs only once when component mounts

    const handleEdit = (staff: Staff) => {
        setShowEditForm(true);
        setSelectedRow(staff);
    };

    const handleUpdateState = (updatedStaff: Staff) => {
        setStaff(prevStaffs => prevStaffs.map(staff => 
            staff.staffId === updatedStaff.staffId ? updatedStaff : staff
        ));
    };

    const handleDelete = async (staffId: string) => {
        try {
            await DeleteStaff(staffId);
            setStaff(prevStaffs => prevStaffs.filter(staff => staff.staffId !== staffId));
        } catch (err) {
            console.error("Error deleting staff:", err);
        }
    };

    const handleOnClose = () => {
        setShowEditForm(false);
        setShowAddForm(false);
    };

    const handleAdd = (newStaff: Staff) => {
        setStaff(prev => [...prev, newStaff]);
    };

    return (
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>
            <div className="d-flex justify-content-end p-3">
                <Button variant="outline-primary" onClick={() => setShowAddForm(true)}>
                    Add Staff
                </Button>
            </div>
            
            <Table striped bordered hover>
                <thead className="bg-light">
                    <tr>
                        {tHeadings.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                
                <tbody>
                    {staffs.length > 0 ? staffs.map((row, index) => (
                        <tr key={row.staffId}>
                            <td>{index + 1}</td>
                            {Object.values(row).map((cell, idx) => (
                                <td key={idx}>{cell}</td>
                            ))}
                            <td>
                                <Button variant="outline-secondary" size="sm" onClick={() => handleEdit(row)}>
                                    Edit
                                </Button>
                                {' '}
                                <Button variant="outline-danger" size="sm" onClick={() => handleDelete(row.staffId)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={tHeadings.length} className="text-center text-muted">
                                No staff data available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Edit Staff Form */}
            <StaffEdit
                show={showEditForm}
                selectedRow={selectedRow}
                update={UpdateStaff}
                handelUpdateState={handleUpdateState}
                handleOnClose={handleOnClose}
            />
            
            {/* Add Staff Form */}
            <StaffAdd
                show={showAddForm}
                handleOnClose={handleOnClose}
                update={SaveStaff}
                handleAdd={handleAdd}
            />
        </div>
    );
};