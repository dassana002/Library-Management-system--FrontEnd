import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { DeleteMember, GetAllMembers, SaveMember, UpdateMember } from "../../service/Member";
import Button from "react-bootstrap/esm/Button";
import { MemberEdit } from "./MemberEdit";
import { MemberAdd } from "./MemberAdd";

export interface Members {
    memberId: string;
    firstname: string;
    lastname: string;
    email: string;
}

export const Member = () => {
    const tHeadings: string[] = [
        "#",
        "MemberId",
        "Firstname",
        "Lastname",
        "Email",
        "MemberShipDate",
        "Options"
    ];

    const [members, setMembers] = useState<Members[]>([]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Members | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const getAllMembers = await GetAllMembers();
                setMembers(getAllMembers);
            } catch (error) {
                console.error("Error fetching members:", error);
            }
        };
        loadData();
    }, [members]); 

    const handleDelete = async (memberId: string) => {
        try {
            await DeleteMember(memberId);
            setMembers(members.filter((member) => member.memberId !== memberId));
        } catch (err) {
            console.error("Error deleting member:", err);
        }
    };

    const handleEdit = (row: Members) => {
        setShowEditForm(true);
        setSelectedRow(row);
    };

    const handleUpdateState = (updatedMember: Members) => {
        setMembers((prevMembers) =>
            prevMembers.map((member) =>
                member.memberId === updatedMember.memberId ? updatedMember : member
            )
        );
    };

    const handleAdd = async(newMember :Members)=> {
        try {
            await SaveMember(newMember);
            setMembers(
                (prevs)=> 
                    [...prevs , newMember]);
        } catch (error) {
            console.error(error);
        }
    }

    const handleOnClose = () => {
        setShowEditForm(false);
        setShowAddForm(false);
    };

    return (
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>
            
            <div className="d-flex justify-content-end p-3">
                <Button variant="outline-primary" 
                    onClick={
                        ()=> setShowAddForm(true)}
                >Add Member</Button>
            </div>
            
            <Table striped bordered hover style={{ minWidth: "600px" }}>
                <thead style={{ position: "sticky", top: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        {tHeadings.map((heading, index) => (
                            <th key={index} scope="col">{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {members.map((row, rowIndex) => (
                        <tr key={row.memberId}>
                            <td>{rowIndex+1}</td>
                            {Object.values(row).map((cell, index)=>(
                                <td key={index}>{cell}</td>
                            ))}
                            <td>
                                <Button variant="outline-secondary" onClick={() => handleEdit(row)}> Edit </Button>
                                <Button variant="outline-danger" onClick={() => handleDelete(row.memberId)}> Delete </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
                
                <MemberEdit
                    show={showEditForm}
                    selectedRow={selectedRow}
                    handleOnClose={handleOnClose}
                    updateMember={UpdateMember}
                    handleUpdateState={handleUpdateState}
                />

            <MemberAdd
                show = {showAddForm}
                handleOnClose = {handleOnClose}
                update = {UpdateMember}
                handleAdd={handleAdd}
            />    
        </div>
    );
};
